function populate()
{
	// Safeguard: appending image doesn't seem to update the page height, even when assigning populate to the created image
	for (var i = 0; i < 16; i++)
	{
		var pageBottom = document.documentElement.getBoundingClientRect().bottom;
		console.log(pageBottom);
		if (pageBottom > 738 * 8) return;
		
		var img = document.createElement('img');
		img.src = "fiddler_loop.png";
		
		document.body.appendChild(img);
	}
}

window.addEventListener("scroll", populate);
