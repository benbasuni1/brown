const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const twoSum = (a, k) => {
	let map = {};

	for (let i = 0; i < a.length; i++) {
		let item = a[i];
		let diff = item - k;

		if (diff in map) return true;
		map[item] = i;
	}

	return false;
}
 
const main = () => {
	log(twoSum([2,1,8,4,7,3], 3))
}
 
main();