const { helper: utils, log, line } = require('../../__common/utils');

// ui.rj.um.ij
// 🕑 O(n)
// 🛰 O(n)
const longestSubsequence = s => {
	let i = 0;
	let j = 0;
	let maxCount = 0;
	let map = {};

	while (j < s.length) {
		let item = s[j];

		// update i, record j
		if (map[item]) i = Math.max(i, map[item]);
		map[item] = j + 1;

		console.log('i, j', i, j)
		console.log('map', map)
		// update maxCount, incr j
		maxCount = Math.max(j - i + 1, maxCount);
		j++;

		utils.vars('maxCount', maxCount);
	}

	return maxCount;
}
 
const main = () => {
	log(longestSubsequence("ABCABADEC"))
}
 
main();