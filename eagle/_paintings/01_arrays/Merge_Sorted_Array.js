/*  
	🕑 O(n) -- 🛰 O(1)
	Merge Sorted Array
	Input  : (<ArrayInt a1>, <Int m>, <ArrayInt a2>, <Int n>) 
	Output : (<ArrayInt>) 
*/

mergeSortedArray(a1, m, a2, n) : <ArrayInt> {
	idx = len(a) - 1;
	m -= 1; n-= 1;
	
	while (m and n >= 0):
		a1.idx = 
		(a1.m >= a2.n) ? 
			a1.m; m--; : 
			a2.n; n--;
		idx--
	
	while (n >= 0):
		a1.idx = a2.n; 
		n--; idx--;

	∆ a1;
}

