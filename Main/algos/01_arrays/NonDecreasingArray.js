/*
	🕑 O(n) -- 🛰 O(1)
	10. Non Decreasing Array
	Input  : (<ArrayInt a>) 
	Output : (<Bool>)
*/

nonDecreasingArray(a) : <Bool> {
	count = 0
	(1; i < len(a) && count <= 1):
		if (a.i-1 > a.i):
			count++
			if (i - 2 < 0 || a.i-2 <= a.i):
				a.i-1 = a.i
			else
				a.i = a.i-1

	∆ count <= 1
}