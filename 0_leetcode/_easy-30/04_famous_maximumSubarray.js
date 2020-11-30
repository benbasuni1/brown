const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const maximumSubarray = a => {
	let tempSum = a[0];
	let maxSum = a[0];

	for (let i = 1; i < a.length; i++) {
		tempSum = Math.max(a[i], tempSum + a[i]);
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
}
 
const main = () => {
	log(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4]))
}
 
main();