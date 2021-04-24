function getQueryParam(param = "q")
{
	return (new URL(document.location)).searchParams.get(param);
}

// Check checkbox checked state
// If "checked" does not exist, return false
function getBool(id)
{
	return document.getElementById(id).checked ?? false;
}

// Get slider value
// If "value" does not exist, return 1.0
function getFloat(id)
{
	return document.getElementById(id).value ?? 1.0;
}

// Get textbox value
// If "value" does not exist, return ""
function getString(id)
{
	return document.getElementById(id).value ?? "";
}

var sound = document.createElement("audio");
sound.setAttribute("preload", "auto");
sound.setAttribute("controls", "none");
sound.style.display = "none";

function init()
{
	updateParams();
	document.getElementById("sound").value = sound.src
	document.getElementById("speed").value = sound.playbackRate * 100;
	document.getElementById("preserve").checked = sound.preservesPitch;
	document.getElementById("loop").checked = sound.loop;
}

function playSound()
{
	updateParams();
	sound.play();
}

function stopSound()
{
	sound.pause();
}

function updateParams()
{
	var speed = parseFloat(getQueryParam("speed")) || Math.max(0.0625, getFloat("speed"));
	sound.playbackRate = speed / 100;
	
	var speedBar = document.getElementById("speedBar");
	speedBar.value = speed;
	speedBar.textContent = speed + '%';
	
	sound.preservesPitch = getQueryParam("preserve") || getBool("preserve");
	
	var volume = Math.max(0, getFloat("volume"));
	sound.volume = volume / 100;
	
	sound.loop = (getQueryParam("loop") == "true") || getBool("loop");
	
	var src = getQueryParam("sound") || getString("sound") || "Realtek_Test_Noise.wav";
	
	if (sound.src !== src)
	{
		// Setting src, even to the same value, stops the playback
		sound.src = src;
	}
	
	console.log(src, speed, volume, (getQueryParam("loop") == true) || getBool("loop"));
}
