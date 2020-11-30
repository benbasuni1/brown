/*
	🕑 O(n!) -- 🛰 O(1)
	01. Phone Numbers
	Input  : (<String s>) 
	Output : (<ArrayString>)
*/

phoneNumbers(n) : <ArrayString> {
	helper(i, s):
		if (i == len(s)) res+(s); ∆
		(c of map.n[i]): helper(i + 1, s + c)

	res[]; fh(0, ''); ∆res
}
