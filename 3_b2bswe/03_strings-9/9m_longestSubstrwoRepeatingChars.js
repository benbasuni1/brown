const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const longestSubsequence = s => {
	let i = 0;
	let j = 0;
	let count = 0;
	let map = {};

	while (j < s.length) {
		if (map[s[j]]) i = Math.max(i, map[s[j]]);

		map[s[j]] = j + 1;
		count = Math.max(count, j - i + 1);
		j++;
	}

	return count;
}
 
const main = () => {
	log(longestSubsequence("ABCABADEC"))
}
 
main();