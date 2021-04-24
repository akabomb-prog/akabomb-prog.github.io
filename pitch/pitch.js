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

var sound = document.createElement("audio");
sound.setAttribute("preload", "auto");
sound.setAttribute("controls", "none");
sound.style.display = "none";

function playSound()
{
	sound.src = getQueryParam("sound") ?? "./barney.wav";
	sound.play();
	updateParams();
}

function stopSound()
{
	sound.pause();
}

function updateParams()
{
	var speed = Math.max(0.0625, getFloat("speed"));
	sound.playbackRate = speed / 100;
	
	var speedBar = document.getElementById("speedBar");
	speedBar.value = speed;
	speedBar.textContent = speed + '%';
	
	sound.preservesPitch = getBool("preserve");
	
	var volume = Math.max(0, getFloat("volume"));
	sound.volume = volume / 100;
}
