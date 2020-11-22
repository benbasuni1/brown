const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const countSubarraySumToK = (a, k) => {
	const map = { 0: 1 };
	let sum = 0;
	let count = 0;

	a.forEach(item => {
		sum += item;

		if ((sum - k) in map) 
			count += map[sum - k];

		map[sum] = sum in map ? map[sum] + 1 : 1;
	});

	return count;
}
 
const main = () => {
	log(countSubarraySumToK([1, 0, -1, 1], 0))
}
 
main();