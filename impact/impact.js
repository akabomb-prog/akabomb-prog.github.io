var canvas = null,
	ctx = null,
	mImage = null;

var topSize = 64,
	bottomSize = 64,
	strokeSize = 4,
	topText = "TOP TEXT",
	bottomText = "BOTTOM TEXT",
	shadow = false;

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

function drawImpact(text, size, stWidth = 1, x, y)
{
	ctx.save();
	
	ctx.font = size + "px Impact";
	ctx.textAlign = "center";
	
	// Black outline
    ctx.strokeStyle = "black";
	
	// White text
	ctx.fillStyle = "white";
	
	// Round outline with this width, and a miter limit of 2
    ctx.lineJoin = "round";
    ctx.lineWidth = stWidth;
	ctx.miterLimit = 6;
	
	if (shadow)
	{
		// Shadow
		ctx.shadowColor = "black";
		ctx.shadowBlur = 4;
	}
	
	// Fill text
    ctx.strokeText(text, x, y);
	ctx.fillText(text, x, y);
	
	ctx.restore();
}

function initCanvas(img)
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	canvas.width = img.width;
	canvas.height = img.height;
	ctx.drawImage(img, 0, 0);
}

function init()
{
	canvas = document.getElementById("imgCanvas");
	ctx = canvas.getContext("2d");
	
	updateParams();
}

function loadImage(event)
{
	mImage = document.getElementById("memeImage");
	mImage.src = URL.createObjectURL(event.target.files[0]);
	
	mImage.onload = function ()
	{
		initCanvas(mImage);
		
		drawImpact(topText, topSize, strokeSize, canvas.width / 2, topSize);
		drawImpact(bottomText, bottomSize, strokeSize, canvas.width / 2, canvas.height - bottomSize * 0.1875);
	};
}

function updateParams()
{
	topSize = getFloat("topSize");
	bottomSize = getFloat("bottomSize");
	
	strokeSize = getFloat("strokeSize");
	
	topText = getString("topText");
	bottomText = getString("bottomText");
	
	shadow = getBool("shadow");
}
