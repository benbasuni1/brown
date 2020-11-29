/*
	🕑 O(n) -- 🛰 O(1)
	02. Can Place Flowers
	Input  : (<ArrayInt a>, <Int n>) 
	Output : (<Bool>)
*/

canPlaceFlowers(a, n) : <Bool> {
	count = 0
	(i < len(a) && count < n):
		next = a.i+1 elif end, then 0
		prev = a.i-1 elif init, then 0
		if (next && prev === 0):
			a.i = 1; count++;

	∆ count == n
}