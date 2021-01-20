const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const twoSum = (a, x) => {
	let storage = {};

	for (let i = 0; i < a.length; i++) {
		let item = a[i];
		let diff = x - item;

		if (storage[item]) return [item, a[storage[item]]];

		storage[diff] = i;
	}

	return -1;
}
 
const main = () => {
	log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
}

main();
  