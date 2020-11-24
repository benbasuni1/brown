const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const countSubarraySumToK = (a, k) => {
	utils.start(a, k);
	const map = { 0: 1 };
	let sum = 0;
	let count = 0;

	for (let item of a) {
		sum += item;
		let diff = sum - k;

		if (diff in map) count += map[diff];

		map[sum] = map[sum] ? map[sum] + 1 : 1;
		console.log('map', map)
		utils.vars('sum', sum, 'item', item, 'diff', diff, 'count', count)
	};

	return count;
}
 
const main = () => {
	// log(countSubarraySumToK([1, 0, -1, 1], 0))
	log(countSubarraySumToK([3, 7, -4, -2, 1, 5], 3))
}
 
main();