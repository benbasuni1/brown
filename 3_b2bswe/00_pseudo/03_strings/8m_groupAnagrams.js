/*  
	🕑 O(n log n) -- 🛰 O(n)
	8. Group Anagrams
	Input  : (<Array <Str a> >) 
	Output : (<Arr <Str> >)
*/

groupAnagrams(Array a) : <Array <String> > {
	anagrams{}

	(let word of a):
		sort = word.split("").sort().join("")
		if (anagrams.sort) anagrams.sort.+(word)
		else anagrams.sort = [word]

	return values(anagrams)
}
