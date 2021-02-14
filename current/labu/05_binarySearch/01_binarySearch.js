const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const binarySearch = (a, x) => {
	let left = 0;
	let right = a.length - 1;

	while (left <= right) {
		let m = Math.floor(left + (right - left) / 2);

		if (x > a[m]) left = m + 1;
		else if (x < a[m]) right = m - 1;
		else if (x === a[m]) return m;
	}

	return -1;
}
 
const main = () => {
	log(binarySearch([], 5))
	log(binarySearch([2,3,5,7], 5))
	log(binarySearch([2,3,5,7], 8))
}
 
main();