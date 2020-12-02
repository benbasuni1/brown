const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const anagrams = (a, b) => {
	if (a.length !== b.length) return false;

	let storage = {};

	for (let strA of a)
		storage[strA] = storage[strA] + 1 || 1;

	for (let strB of b) {
		if (!storage[strB]) return false;
		storage[strB]--;
	}

	return true;
}
 
const main = () => {
	log(anagrams('anagram', 'nagaram'));
	log(anagrams('anagram', 'nagaramm'));
}
 
main();