// 🕑 O(n log n)
// 🛰 O(n)
// 8. Group Anagrams (Arr <Str a>) : Arr <Arr <Str> >

fn groupAnagrams(Arr <Str a>) :  Arr <Arr <Str>> {
	anagrams{}

	(let word of a):
		sort = word.split("").sort().join("")
		if (anagrams.sort) anagrams.sort.push(word)
		else anagrams.sort = [word]

	return values(anagrams)
}
