const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const findLongestSubstring = a => {
	let i = 0;
	let j = 0;
	let longest = 0;

	let storage = {};
	storage[a[0]] = 0;

	while (j < a.length) {
		j++;
		let item = a[j];

		if (storage.hasOwnProperty(item) && storage[item] >= i) {
			longest = Math.max(longest,  j - i)
			i = storage[item] + 1;
		}

		storage[item] = j;
	}

	return Math.max(longest, j - i);
}
 
const main = () => {
	log(findLongestSubstring(''));
	log(findLongestSubstring('rithmschool'));
	log(findLongestSubstring('thisisawesome'));
	log(findLongestSubstring('thecatinthehat'));
	log(findLongestSubstring('bbbbbbb'));
	log(findLongestSubstring('longestsubstring'));
	log(findLongestSubstring('thisishowwedoit'));
}
 
main();