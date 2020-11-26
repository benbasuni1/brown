/*  
	🕑 O(n) -- 🛰 O(1)
	7. Next Permutation
	Input  : (<Arr int a>) 
	Output : (<Arr int>)
*/

nextPermutation(<Array int a>) : <Array int> {
	i = len(a) - 2
	j = len(a) - 1

	while (a.i >= a.i + 1) i--;

	if (i >= 0):
		while (a.i >= a.j) j--;
		swap(a.i, a.j)

	∆ reverse(a, i + 1)
}