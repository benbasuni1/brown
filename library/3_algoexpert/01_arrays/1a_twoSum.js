const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const twoSum = (a, x) => {
	let storage = {};

	for (let i = 0; i < a.length; i++) {
		let item = a[i];
		let diff = x - item;

		if (storage[diff]) return [storage[diff], i];

		storage[item] = i;
	}

	return [];
}
 
const main = () => {
	log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
}
 
main();