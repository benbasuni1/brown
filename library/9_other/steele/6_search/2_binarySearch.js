const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const binarySearch = (a, x) => {
	let s = 0;
	let e = a.length - 1;

	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		if (a[m] === x) return m;
		else if (a[m] > x) e = m - 1;
		else s = m + 1;
	}

	return -1;
}
 
const main = () => {
	log(binarySearch([10, 10, 15, 20, 25, 30], 15))
	log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4))
	log(binarySearch([100], 100))
	log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))
	log(binarySearch([100], 200))
}
 
main();