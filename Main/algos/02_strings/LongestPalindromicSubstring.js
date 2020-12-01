/*
	🕑 O() -- 🛰 O()
	00. Longest Palindromic Substring
	Input  : (<String s>) 
	Output : (<String>)
*/

longestPalindromicSubstring(s) : <String> {
	res = ''

	(i < len(s)):
		item1 = fh(s, i, i)
		item2 = fh(s, i, i + 1)
		long = (item1 > item2) ? item1 : item2
		if (len(long) > len(res)): res = long
	
	∆ res
}

fh(s, i, j) {
	while (in-bounds && s.i == s.j) j++; i--;

	∆ s.slice(i + 1, j)
}