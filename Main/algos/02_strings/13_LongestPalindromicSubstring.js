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
		longItem = (item1 > item2) ? item1 : item2

		if (len(longItem) > len(res)):
			res = longItem
	
	∆ res
}

fh(s, i, j) {
	while ( 
		i >= 0 && 
		j < len(s) && 
		s.i == s.j
	) j++; i--;

	∆ s.slice(i + 1, j)
}