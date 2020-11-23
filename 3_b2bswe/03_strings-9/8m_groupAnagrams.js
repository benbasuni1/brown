const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const groupAnagrams = a => {
	const anagrams = {};

	a.forEach(word => {
		const sorted = word.split("").sort().join("");

		if (sorted in anagrams) 
			anagrams[sorted].push(word);
		else
			anagrams[sorted] = [word];
	});

	return Object.values(anagrams);
}
 
const main = () => {
	log(groupAnagrams(["eat", "bat", "ate", "tab", "tea", "eat"]))
}
 
main();