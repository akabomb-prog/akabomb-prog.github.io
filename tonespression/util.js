function subscribe_enter(input, callback = function (event) { alert("Enter pressed in input"); })
{
	// Execute a function when the user releases a key on the keyboard
	input.addEventListener("keyup", function(event)
	{
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13)
		{
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger function
			callback(event);
		}
	});
}

function avg(...x)
{
	return x.reduce((a, b) => a + b) / x.length;
}

function lerp(a, b, t)
{
	return a + (b - a) * t;
}

function clamp(x, a, b)
{
	return Math.max(a, Math.min(x, b));
}

function sqr(x)
{
	return x * x;
}

function quantize(val, step)
{
	return Math.floor(val / step) * step;
}

var tet = Math.pow(2, 1 / 12);
var reference = 440;

function to_12tet(note)
{
	return 440 * Math.pow(tet, note - 49);
}
