/// discord pfp creator lol

var bgCSS = "hsl(214, 8%, 50%)";

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

        ctx.drawImage(thing, 128-77, 128-56);

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
    console.log("updated parameters");

    drawAll();

    createDownloadLink();
    
    console.log("download link created and placed before", canvas.nextSibling);
}

function init()
{
	canvas = document.getElementById("pfp");
	ctx = canvas.getContext("2d");
    thing.src = "./discord_logo.png";
    thing.onload = function ()
    {
        drawAll();
        createDownloadLink();
    };
	
	updateParams();
}

function createDownloadLink()
{
    // Remove the previous download link, if exists
    var prevDLLink = document.getElementById("dl_link");
    if (prevDLLink !== null)
    {
	    document.body.removeChild(prevDLLink);
    }

	// Get canvas data
	var data = canvas.toDataURL("image/png");
	
	// Create an <a> element and assign the data
	var link = document.createElement("a");
	link.download = "discord.png";
	link.href = data;
    link.id = "dl_link";
    link.textContent = "Download";
	
	// Put download link after canvas
	document.body.insertBefore(link, canvas.nextElementSibling.nextElementSibling);
}
