
// This code could be improved, but this is just for a one-off joke so who cares

const cursorInfo = {
	empty: "hanada.png",
	rat: "ratata.png"
};

const soundInfo = {
	grab: "rote_away.wav",
	back: "putback.wav"
};

var rat;
var ratinplace = true;

var statusText;
var statusTimeout = 0;

function youHave(havewhat)
{
	statusText.textContent = "You have " + havewhat;
	
	clearTimeout(statusTimeout);
	statusTimeout = setTimeout(function ()
	{
		statusText.textContent = null;
	}, 4000);
}

function getRatAndStatus()
{
	rat = document.getElementById("rat");
	statusText = document.getElementById("status");
}

function setRatCursor(cur)
{
	rat.style.cursor = `url(${cur}), auto`;
}

function toggleRat()
{
	ratinplace = !ratinplace;
	playonce(ratinplace ? soundInfo.back : soundInfo.grab);
	rat.style.opacity = ratinplace ? 100 : 0;
	setRatCursor(ratinplace ? cursorInfo.empty : cursorInfo.rat);
	youHave(ratinplace ? "put the rat back" : "taken the rat");
}
