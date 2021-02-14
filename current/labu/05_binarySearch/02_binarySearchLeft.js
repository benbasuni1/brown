const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const binarySearchLeft = (a, x) => {
	let left = 0;
	let right = a.length - 1;

	while (left <= right) {
		let m = Math.floor(left + (right - left) / 2);

		if (x > a[m]) left = m + 1
		else if (x < a[m]) right = m - 1;
		else if (x === a[m]) right = m - 1;
	}

	return (left >= a.length || a[left] !== x) ? -1 : left;
}
 
const main = () => {
	log(binarySearchLeft([], 5))
	log(binarySearchLeft([2,3,5,7], 5))
	log(binarySearchLeft([2,3,5,7], 8))
}
 
main();