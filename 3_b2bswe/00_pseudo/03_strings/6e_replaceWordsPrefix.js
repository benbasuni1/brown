// 🕑 O(n^2)
// 🛰 O(n)
// 6. Replace Words Prefix(Arr Str<prefixes>, Str sentence): Str

fn replaceWordPrefix(Arr <Str prefixes>, Str sentence) : Str {
	words = sentence.split('');
	map{}

	(let prefix of prefixes) map[prefix] = true

	(0; i < len(words)):
		word = words[i]
		(0; j < word):
			if (map[word.substr(j + 1)]):
				words[i] = word.substr(0, j + 1); break;
	
	return words.join(" ")
}