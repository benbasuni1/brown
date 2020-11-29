const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const countCharacters = (a, s) => {
	let count = 0;
	for (let word of a)
		if (wordPasses(word, createMap(s))) count += word.length;
	
	return count;
}

const createMap = s => {
	let map = {};
	for (let letter of s) 
		map[letter] = map[letter] + 1 || 1;

	return map;
}

const wordPasses = (word, map) => {
	for (let letter of word) {
		if (!map[letter] || map[letter] === 0) return false;
		map[letter]--;
	}

	return true;
}
 
const main = () => {
	log(countCharacters(["cat","bt","hat","tree"], "atach"))
	log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"))
}
 
main();