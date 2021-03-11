var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var audio_rate = (audioCtx.sampleRate || -1);

function sound_output(bufSize, pr)
{
	// Create an empty three-second stereo buffer at the sample rate of the AudioContext
	var myArrayBuffer = audioCtx.createBuffer(2, bufSize, audioCtx.sampleRate);
	
	// Fill the buffer
	for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++)
	{
		// This gives us the actual array that contains the data
		var nowBuffering = myArrayBuffer.getChannelData(channel);
		for (var i = 0; i < myArrayBuffer.length; i++)
		{
			// audio needs to be in [-1.0; 1.0]
			nowBuffering[i] = pr(channel, processed + i, nowBuffering[i - 1] ?? 0) ?? 0;
		}
	}
	
	processed += bufSize;

	// Get an AudioBufferSourceNode.
	// This is the AudioNode to use when we want to play an AudioBuffer
	var source = audioCtx.createBufferSource();

	// set the buffer in the AudioBufferSourceNode
	source.buffer = myArrayBuffer;

	// connect the AudioBufferSourceNode to the
	// destination so we can hear the sound
	source.connect(audioCtx.destination);

	source.start();
}
