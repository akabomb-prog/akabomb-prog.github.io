/// discord pfp creator lol

var bgCSS = "hsl(214, 8%, 50%)",
    thingCSS = "white";

var canvas;
var ctx;
var thing = new Image();

function changeBG(newCSS)
{
    document.getElementById('bg_css').value = newCSS;
    updateParams();
}

function drawThing()
{
    ctx.save();

        ctx.fillStyle = thingCSS;
        ctx.drawImage(thing, 128-77, 128-56);
        // ctx.drawImage(thing, 128-77, 128-77);

    ctx.restore();
}

function drawAll()
{
    ctx.save();

        ctx.fillStyle = bgCSS;
        ctx.fillRect(0, 0, 256, 256);

    ctx.restore();

    drawThing();
}

function updateParams()
{
    bgCSS = getString("bg_css");
    thingCSS = getString("thing_css");

    console.log("updated parameters");

    drawAll();
}

function init()
{
	canvas = document.getElementById("pfp");
	ctx = canvas.getContext("2d");
    thing.src = "./discord_logo.png";
    thing.onload = drawAll;
    // thing.src = "./thing_clean_white.png";
	
	updateParams();
}

function downloadImage()
{
	// Get canvas data
	var data = canvas.toDataURL("image/png");
	
	// Create an <a> element and assign the data
	var link = document.createElement("a");
	link.download = "discord.png";
	link.href = data;
	
	// Simulate download link press
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
}
