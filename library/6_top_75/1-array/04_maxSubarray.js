const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const maxSubarray = a => {
	let max1 = a[0];
	let max2 = a[0];

	for (let i = 1; i < a.length; i++) {
		max1 = Math.max(a[i], max1 + a[i]);
		max2 = Math.max(max1, max2);
	}

	return max2;
}
 
const main = () => {
	log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))
}
 
main();