/*  
	🕑 O(n^2) -- 🛰 O(n)
	6. Replace Words Prefix
	Input  : (<Arr <Str prefixes> >, <String sentence>) 
	Output : (<Str>)
*/

replaceWordsPrefix(<Arr <String prefixes> >, <String sentence> ) :
<String> { 
	words = sentence.split('');
	map{}

	(let prefix of prefixes) map[prefix] = true

	(i < len(words)):
		word = words[i]
		(j < word):
			if (map[word.substr(j + 1)]):
				words[i] = word.substr(0, j + 1); break;
	
	return words.join(" ")
}