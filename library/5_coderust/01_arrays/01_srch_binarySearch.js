const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const binarySearch = (a, k) => {
	let s = 0;
	let e = a.length - 1;

	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		if (a[m] === k) return m;
		else if (a[m] > k) e = m - 1;
		else s = m + 1;
	}

	return -1;
}

const main = () => {
	log(binarySearch([10,20,47,59,63,75,88,99], 59))
	log(binarySearch([10,20,47,59,63,75,88,99], 60))
}
 
main();