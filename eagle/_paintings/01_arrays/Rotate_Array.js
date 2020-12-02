/*  
	🕑 O(n) -- 🛰 O(1)
	Rotate Array
	Input  : (<ArrayInt a>, <Int k>) 
	Output : (<ArrayInt>) 
*/

rotateArray(a, k) : <ArrayInt> {
	end = len(a) - 1
	k %= len(a)
	reverse(a, 0, end);
	reverse(a, 0, k - 1);
	reverse(a, k, end);
}

reverse(a, i, j) {
	while (i < j):
		swap(i, j);
		i++; j--
	∆ a
}

