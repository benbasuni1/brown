/*
	🕑 O(n!) -- 🛰 O(1)
	03. Permutations
	Input  : (<ArrayInt a>) 
	Output : (<Array <ArrayInt>)
*/

permutations(a) : <ArrayInt> {
	helper(a, n=0):
		if (n == len(a) - 1): 
			res+(a.slice(0)) ∆

		(n; i < len(a)):
			swap(a.i, a.n)
			helper(a, n + 1)
			swap(a.i, a.n)

	res[]; fh(a); ∆ res
}