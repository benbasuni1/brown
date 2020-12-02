/*
	🕑 O(log n) -- 🛰 O(1)
	Rotated Search Array
	Input  : (<ArrayInt a>, <Int k>) 
	Output : (<Int>)
*/

rotatedSearchArray(a) : <Int> {
	s = 0, e = len(a)-1
	
	while (s <= e):
		m = floor(s - (e + s) / 2)

		if (m == k) ∆ m

		// check for sorted first
		if (m >= s && k in leftSorted): e = m - 1;
		elif (m <= e && k in rightSorted): s = m + 1;
		elif (m <= s): e = m - 1;
		elif (m >= e): s = m + 1

	∆ -1
}
