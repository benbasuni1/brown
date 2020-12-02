const { helper: utils, log, line } = require('./__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const longestSubstringWoRepeating = s => {
	let i = 0;
	let j = 0;
	let maxCount = 0;
	let map = {};

	while (j < s.length) {
		if (map[s[j]]) i = Math.max(i, map[s[j]]);
		map[s[j]] = j + 1;
		maxCount = Math.max(maxCount, j - i + 1);
		j++;
	}

	return maxCount;
}
 
const main = () => {
	log(longestSubstringWoRepeating("abcabcbb"))
}
 
main();