const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const binarySearch = (a, x) => {
	let s = 0;
	let e = a.length - 1;

	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		if (a[m] === x) return m;
		else if (a[m] > x) e = m - 1;
		else s = m + 1;
	}

	return null;
}
 
const main = () => {
	log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
	log(binarySearch([1, 5, 23, 111], 111))
	log(binarySearch([1, 5, 23, 111], 9))
}
 
main();