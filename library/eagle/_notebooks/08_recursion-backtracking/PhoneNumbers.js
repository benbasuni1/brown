/*
	🕑 O(n!) -- 🛰 O(1)
	01. Phone Numbers
	Input  : (<String s>) 
	Output : (<ArrayString>)
*/

phoneNumbers(s) : <ArrayString> {
	helper(i, str):
		if (i == len(s)): res+(str) ∆

		(char of map[s.i]): helper(i+1, str + char)

	res[]; fh(0, ''); ∆ res
}
