// Check checkbox checked state
// If "checked" does not exist, return false
function getBool(id)
{
	return document.getElementById(id).checked ?? false;
}

// Get slider value
// If "value" does not exist, return 1.0
function getFloat(id)
{
	return document.getElementById(id).value ?? 1.0;
}

// Get textbox value
// If "value" does not exist, return ""
function getString(id)
{
	return document.getElementById(id).value ?? "";
}
