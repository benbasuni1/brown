/*
	🕑 O(n) -- 🛰 O(1)
	11. Reverse Words
	Input  : (<String s>) 
	Output : (<String>)
*/

reverseWords(s) : <String> {
	res = WORD = ''
	(item of s):
		if (item != ' ') WORD = item + WORD
		else res += WORD + ' '; WORD = ''

	∆ res + WORD
}