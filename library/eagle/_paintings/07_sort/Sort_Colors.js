/*
	🕑 O(n) -- 🛰 O(1)
	01. Sort Colors
	Input  : (<ArrayInt a>) 
	Output : (<ArrayInt>)
*/

sortColors(a) : <ArrayInt> {
	s = 0, i = 0, 
	e = len(a) -1

	while (i <= e):
		case(a.i):
			0: swap(i, s), s++,i++
			1: i++
			2: swap(i, e), e--
		
	∆ a
}