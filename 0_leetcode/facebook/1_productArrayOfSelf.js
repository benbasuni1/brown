const { helper: utils, log, line } = require('../../__common/utils');

// 🕑 O()
// 🛰 O()
const producyArrayOfSelf = a => {
	utils.start(a)
	let res = new Array(a.length).fill(1);

	let left = 1;
	for (let i = 0; i < a.length; i++) {
		res[i] *= left;
		left *= a[i];
	}

	let right = 1;
	for (let i = a.length - 1; i >= 0; i--) {
		res[i] *= right;
		right *= a[i];
	}

	return res
}
 
const main = () => {
	log(producyArrayOfSelf([2,3,4,5]))
}
 
main();