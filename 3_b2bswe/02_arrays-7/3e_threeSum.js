const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(n)
const threeSum = a => {
	utils.start(a, 0);
	a.sort((a, b) => a - b);
	let result = [];

	for (let i = 0; i < a.length - 2; i++) {
		if (i > 0 && a[i] === a[i - 1]) continue;
		let left = i + 1;
		let right = a.length - 1;
		while (left < right) {
			let sum = a[i] + a[left] + a[right];
			utils.prettyPrint(a, i, left, right);
			utils.vars2(`${a[i]} + ${a[left]} + ${a[right]} = ${sum}`)
			if (sum === 0) {
				result.push([a[i], a[left], a[right]]);
				left++;
				right--;
				while (left < right && a[left] === a[left - 1]) left++;
				while (left < right && a[right] === a[right + 1]) right--;
			} else if (sum < 0) left++;
			else right--;
		}
	}

	return result;
}
 
const main = () => {
	log(threeSum([-3, -1, 1, 0, 2, 10, -2, 8]))
	// log(threeSum([-5, 3, 2, 0, 1, -1, -5, 3, 2]))
	// log(threeSum([1, 2, 3, 4]))
}
 
main();