
/* Initial setup */

console.log("What's poppin'?");

var pop = document.createElement("audio");
	
pop.src = "./o0.wav";
pop.setAttribute("preload", "auto");
pop.setAttribute("controls", "none");
pop.style.display = "none";
document.body.appendChild(pop);

var cat = document.createElement("img");
cat.align = "middle";
cat.src = "./pCp.jpg";

cat.width = 512;
cat.height = 512;

/* Page setup */

function play()
{
	pop.play()
		.catch(e =>
		{
			console.log("Can't play sound.", e);
		});
}

cat.oncontextmenu = function ()
{
	return false;
};
cat.onpointerdown = function ()
{
	cat.src = "./pOp.jpg";
	pop.src = "./o" + Math.floor(Math.random() * 11) + ".wav";
	play();
};
cat.onpointerup = function ()
{
	if (cat.src.endsWith("pCp.jpg")) return;
	
	cat.src = "./pCp.jpg";
	pop.src = "./c" + Math.floor(Math.random() * 12) + ".wav";
	play();
};
cat.onpointerleave = cat.onpointerup;

document.body.insertBefore(cat, document.body.childNodes[0]);
