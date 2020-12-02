const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(n)
const replaceWordsPrefix = (prefixes, sentence) => {
	let words = sentence.split(" ");
	let map = {};
	
	// Add prefix to map
	for(let prefix of prefixes)
		map[prefix] = true;
	
	console.log('map', map)
	line();

	// Loop through words, and each word
	for(let i = 0; i < words.length; i++) {
		let word = words[i];
		for(let j = 0; j < word.length; j++) {

			// If the word contains a prefix, change
			console.log('word.substring(0,j)', word.substring(0,j + 1))
			if(map[word.substring(0, j + 1)]) {
				words[i] = word.substring(0, j + 1);
				break;
			}
		}
		line();
	}
	
	return words.join(" ");
}
 
const main = () => {
	log(replaceWordsPrefix(["cat", "catch", "Alabama"], "The cats were catching yarn"))
}
 
main();