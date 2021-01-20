const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const mergeSort = a => {
	let helper = (a, low, high) => {
		let mid = (low + high) / 2;
		helper(a, low, mid);
		helper(a, mid + 1, high);

		// post-order traversal
		merge(a, low, mid, high)
	}

	return helper(a, 0, a.length - 1);
}
 
const main = () => {
	log(mergeSort())
}
 
main();