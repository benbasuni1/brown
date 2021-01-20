const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const quickSort = a => {
	let helper = (a, low, high) => {
		// pre-order traversal
		let p = partition(a, low, high);

		helper(a, low, high - 1);
		helper(a, low + 1, high);
	}

	return helper(a, 0, a.length - 1);
}
 
const main = () => {
	log(quickSort())
}
 
main();