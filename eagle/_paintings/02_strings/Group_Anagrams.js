/*  
	🕑 O(n log n) -- 🛰 O(n)
	Group Anagrams
	Input  : (<ArrayString a>) 
	Output : (<ArrayString)
*/

groupAnagrams(a) : <ArrayString> {
	anagrams{}

	(let word of a):
		sort = word.split("").sort().join("")
		if (anagrams.sort) anagrams.sort.+(word)
		else anagrams.sort = [word]

	return values(anagrams)
}
