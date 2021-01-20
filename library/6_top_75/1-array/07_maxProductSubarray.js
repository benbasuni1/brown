const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const maxProdSubarray = a => {
	let result = -Infinity;
	let max = 1;
	let min = 1;

	for (let num of a) {
		let prod1 = num * max;
		let prod2 = num * min;

		max = Math.max(num, Math.max(prod1, prod2))
		min = Math.min(num, Math.min(prod1, prod2))

		result = Math.max(max, result);
	}

	return result;
}
 
const main = () => {
	log(maxProdSubarray([2,3,-2,4]))
}
 
main();