/*
	🕑 O(n!) -- 🛰 O(1)
	02. Generate Parens
	Input  : (<Int n>) 
	Output : (<ArrayString>)
*/

generateParens(n) : <ArrayString> {
	helper(L, R, s):
		if (L > R): ∆
		if (L & R == 0): res+s, ∆
		if (L > 0): helper(L - 1, R, s'(')
		if (R > 0): helper(L, R - 1, s')')

	res[]; helper(n, n, ''); ∆ res
}

