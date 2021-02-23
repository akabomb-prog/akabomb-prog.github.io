
/*
 * Play sound, then destroy it.
 *
 * @param string url - URL of sound to play
 */
function playonce(url)
{
	var sound = new Howl({
		src: [ url ]
	});
	
	sound.onend = function (id)
	{
		sound.unload();
		sound = null;
		delete sound;
	};
	
	sound.play();
}

/*
 * Create looping sound and return its ID.
 * After stopping, the sound is destroyed.
 *
 * @param string url - URL of sound to play
 */
function playloop(url)
{
	var sound = new Howl({
		src: [ url ],
		loop: true
	});
	
	sound.onend = function (id)
	{
		sound.unload();
		sound = null;
		delete sound;
	};
	
	sound.play();
	
	return sound;
}
