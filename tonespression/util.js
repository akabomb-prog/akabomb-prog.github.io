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