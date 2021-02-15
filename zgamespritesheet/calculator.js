function totalFrames(sw,sh, iw,ih)
{
	return Math.round(iw / sw) * Math.round(ih / sh);
}

function frameToFL(x, total)
{
	if (isNaN(x) || typeof x !== 'number')
	{
		return NaN;
	}
	
	return 1/total * (x + 2);
}

function pixToFL(x)
{
	if (isNaN(x) || typeof x !== 'number')
	{
		return NaN;
	}
	
	return x / 1000 + 0.0001;
}