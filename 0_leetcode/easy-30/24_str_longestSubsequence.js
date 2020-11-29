const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const longestSubsequence = a => {
	if (!a.length) return 0;
	let count = 1;
	let maxCount = -Infinity;

	for (let i = 1; i < a.length; i++) {
		let prev = a[i - 1];
		let item = a[i];

		if (item > prev) {
			count++;
			maxCount = Math.max(count, maxCount);
		} else {
			count = 1;
		}
	}

	return Math.max(maxCount, count);
}
 
const main = () => {
	log(longestSubsequence([1, 3, 5, 4, 7]))
	log(longestSubsequence([2, 2, 2, 2, 2]))
}
 
main();