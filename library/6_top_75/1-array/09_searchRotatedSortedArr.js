const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const searchRotatedArray = (a, k) => {
	let s = 0;
	let e = a.length - 1;

	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);

		if (a[m] === k) return m;

		if (a[m] < a[e]) {
			if (a[m] <= k && k <= a[e]) s = m + 1;
			else e = m - 1;
		} else {
			if (a[s] <= k && k <= a[m]) e = m - 1;
			else s = m + 1;
		}
	}

	return -1;
}
 
const main = () => {
	log(searchRotatedArray([4,5,6,7,0,1,2], 0))
}
 
main();