const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const binarySearchRight = (a, x) => {
	let left = 0;
	let right = a.length - 1;

	while (left <= right) {
		let m = Math.floor(left + (right - left) / 2);

		if (x > a[m]) left = m + 1;
		else if (x < a[m]) right = m - 1;
		else if (x === a[m]) left = m + 1;
	}

	return (right === 0 || a[right] !== x) ? -1 : right;
}
 
const main = () => {
	log(binarySearchRight([], 5))
	log(binarySearchRight([2, 3, 5, 7], 5))
	log(binarySearchRight([1, 2, 2, 4], 2))
}
 
main();