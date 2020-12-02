/*
	🕑 O(n) -- 🛰 O(n)
	12. Find Words that can be Formed by Characters
	Input  : (<ArrayString a>, <String s>) 
	Output : (<Int>)

	Description:
	Given an array of strings a and a string s.
	A string is good if it can be formed by characters from s 
	(each can only be used once).
	Return sum of lengths of all good strings in words.
*/

countCharacters(a, s) : <Int> {
	count = 0
	for (word of a):
		if (wordPasses(word, createMap(s))) 
			count += len(word)
	∆ count
}

createMap(s) : <Map> {
	map{}
	(i of s): map[i] = map[i] + 1 || 1
	∆ map
}

wordPasses(word, map) : <Bool> {
	for (i of word) 
		if (!map.i || map.i == 0) ∆ F
		map.i--
	∆ T
}