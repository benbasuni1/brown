const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const productExceptSelf = a => {
	let res = new Array(a.length).fill(1);

	let left = 1;
	let right = 1;

	for (let i = 0; i < a.length; i++) {
		res[i] *= left;
		left *= a[i];
	}

	for (let i = a.length - 1; i >= 0; i--) {
		res[i] *= right;
		right *= a[i];
	}

	return res;
}
 
const main = () => {
	log(productExceptSelf([1,2,3,4]))
}
 
main();