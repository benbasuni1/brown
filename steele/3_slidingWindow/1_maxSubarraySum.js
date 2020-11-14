const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(1)
const maxArraySumNaive = (a, x) => {
	let max = -Infinity;
	for (let i = 0; i < a.length - x; i++) {
		let sum = 0;
		for (let j = i; j < i + x; j++)
			sum += a[j];

		if (sum > max) max = sum;
	}

	console.log('max', max)
	return max;
}

// 🕑 O(n)
// 🛰 O(1)
const maxArraySum = (a, x) => {
	if (x > a.length) return null;

	let tempSum = 0;
	let maxSum = 0;
	for (let i = 0; i < x; i++) {
		maxSum += a[i];
		tempSum += a[i];
	}

	for (let i = x; i < a.length; i++) {
		tempSum = tempSum - a[i - x] + a[i];
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
}
 
const main = () => {
	maxArraySumNaive([2,6,9,2,1,8,5,6,3],3)
	maxArraySum([2,6,9,2,1,8,5,6,3],3)
}
 
main();