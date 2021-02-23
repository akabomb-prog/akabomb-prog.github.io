
// This code could be improved, but this is just for a one-off joke so who cares

const cursorInfo = {
	empty: "cursor/hanada.png",
	rat: "cursor/ratata.png"
};

const soundInfo = {
	grab: "sound/rote_away.wav",
	back: "sound/putback.wav"
};

var rat;
var ratinplace = true;

var statusText;
var statusTimeout = 0;

function handleRat(event)
{
	if (ratinplace) return;
	
	ratinplace = true;
	
	var x = event.clientX, y = event.clientY;
	var ratwidth = rat.style.width.substring(0, rat.style.width.length - 2);
	setRatVisible(true);
	
	console.log(ratwidth);
	
	rat.style.top = y + 'px';
	rat.style.left = (x - ratwidth) + 'px';
	
	playonce(soundInfo.back);
	setRatVisible(true);
	setBodyCursor(cursorInfo.empty);
	youHave("put the rat back");
	
	console.log("rat placed on " + x + " " + y);
	event.preventDefault();
}

function youHave(havewhat)
{
	statusText.textContent = "You have " + havewhat;
	
	clearTimeout(statusTimeout);
	statusTimeout = setTimeout(function ()
	{
		statusText.textContent = null;
	}, 4000);
}

function bodyload()
{
	rat = document.getElementById("rat");
	rat.style.width = 200;
	statusText = document.getElementById("status");
	document.body.onpointerup = handleRat;
}

function setRatCursor(cur)
{
	rat.style.cursor = `url(${cur}), auto`;
}

function setRatVisible(vis)
{
	rat.style.visibility = vis ? "visible" : "hidden";
}

function setBodyCursor(cur)
{
	document.body.style.cursor = `url(${cur}), auto`;
}

function takeRat()
{
	ratinplace = false;
	playonce(soundInfo.grab);
	setRatVisible(false);
	setBodyCursor(cursorInfo.rat);
	youHave("taken the rat");
}
