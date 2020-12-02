const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n log n)
// 🛰 O(n)
const groupAnagrams = a => {
	let map = {};

	for (let word of a) {
		wordSorted = word.split('').sort().join('');
		if (map[wordSorted]) map[wordSorted].push(word);
		else map[wordSorted] = [word];
	}

	return Object.values(map);
}
 
const main = () => {
	log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
}
 
main();