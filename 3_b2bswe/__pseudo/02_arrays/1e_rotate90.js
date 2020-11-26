// 🕑 O(mn)
// 🛰 O(1)
// 1. Rotate90
// Input  : (<Arr <Arr a>) 
// Output : (<Arr <Arr>>)
{
	size = len(a) - 1;

	(lay < len(a) / 2) 
		(i = lay; i < size - lay) 
			top, right, bot, left = 
			a[lay][i][size - lay][size - i]

			lay.i = left
			i.size-lay = top
			size-lay.size-i = right
			size-i.lay = bot

	return a
}
