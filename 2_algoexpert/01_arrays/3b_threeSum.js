const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(1)
const threeSum = (a, x)=> {
	a.sort((a, b) => a - b);
	let result = [];

	for (let i = 0; i < a.length; i++) {
		if (i > 0 && a[i] === a[i - 1]) continue;
		let j = i + 1;
		let k = a.length - 1;
		while (j < k) {
			let sum = a[i] + a[j] + a[k];
			if (sum === x) {
				result.push([a[i], a[j], a[k]]);
				j++;
				k--;
			}
			else if (sum > x) k--;
			else j++;
		}
	}

	return result;
}
 
const main = () => {
	log(threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
	log(threeSum([8, 10, -2, 49, 14], 57))
	log(threeSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0))
	log(threeSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0))

}
 
main();