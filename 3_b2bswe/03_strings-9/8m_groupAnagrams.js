const { helper: utils, log, line } = require('../../__common/utils'); 

// 🕑 O(n log n)
// 🛰 O(n)
const groupAnagrams = a => {
	const anagrams = {};

	// loop through array of words
	a.forEach(word => {
		// sort each word, if they are the same, push to same array, else start a new array with val in it
		const sorted = word.split("").sort().join("");
		if (anagrams[sorted]) anagrams[sorted].push(word);
		else anagrams[sorted] = [word];
	});

	return Object.values(anagrams);
}
 
const main = () => {
	log(groupAnagrams(["eat", "bat", "ate", "tab", "tea", "eat"]))
}
 
main();