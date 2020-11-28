const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const validAnagram = (s, t) => {
	if (s.length !== t.length) return false;

	let map = {};

	for (let char of s)
		map[char] = map[char] + 1 || 1;

	for (let char2 of t) {
		if (!map[char2]) return false;
		map[char2]--;
	}

	return true;
}
 
const main = () => {
	log(validAnagram("anagram", "naagarm"))
	log(validAnagram("car", "rat"))
}
 
main();