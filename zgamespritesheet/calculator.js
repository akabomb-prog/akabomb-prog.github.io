function totalFrames(sw,sh, iw,ih)
{
	return Math.floor(iw / sw) * Math.floor(ih / sh);
}

function frameToFL(x, total)
{
	if (isNaN(x) || x == '')
	{
		return NaN;
	}
	
	return 1/total * (x + 2);
}

function pixToFL(x)
{
	if (isNaN(x) || x == '')
	{
		return NaN;
	}
	
	return x / 1000 + 0.0001;
}