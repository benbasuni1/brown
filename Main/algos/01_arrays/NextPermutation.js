/*  
	🕑 O(n) -- 🛰 O(1)
	7. Next Permutation
	Input  : (<Arr int a>) 
	Output : (<Arr int>)
*/

nextPermutation(<Array int a>) : <Array int> {
	i = len(a) - 2
	j = len(a) - 1
	aI, nextI, aJ

	while (i >= 0 && aI >= nextI) i--;

	if (i >= 0):
		while (j>=0 && aI >= aJ) j--;
		swap(a.i, a.j)

	∆ reverse(a, i + 1)
}