/*  
	🕑 O(mn) -- 🛰 O(1)
	1. Rotate90
	Input  : (<Arr <Arr a>) 
	Output : (<Arr <Arr>>) 
*/

rotate90(<Array> a) : <Array> {
	size = len(a) - 1;

	(lay < len(a) / 2):
		(i = lay; i < size - lay):
			top, right, bot, left = 
			a.lay.i.size-lay.size-i

			a.lay.i.size-lay.size-i = 
			left, top, right, bot

	return a
}
