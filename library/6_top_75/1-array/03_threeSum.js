const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(1)
const threeSum = a => {
	a.sort((a, b) => a - b);
	let res = [];

	for (let i = 0; i < a.length - 2; i++) {
		if (i > 0 && a[i] === a[i - 1]) continue;
		let left = i + 1;
		let right = a.length - 1;

		while (left < right) {
			let sum = a[i] + a[left] + a[right];

			if (sum === 0) {
				res.push([a[i], a[left], a[right]]);
				left++;
				right--;
				while (left < right && a[left] === a[left - 1]) left++;
				while (left < right && a[right] === a[right + 1]) right--;
			} 
			else if (sum < 0) left++;
			else right--;
		}
		
	}

	return res;
}
 
const main = () => {
	log(threeSum([-1,0,1,2,-1,-4]))
}
 
main();