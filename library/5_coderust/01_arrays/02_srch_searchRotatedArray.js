const { helper: utils, log, line, helper } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const searchRotatedArray = (a, k) => {
	let s = 0;
	let e = a.length - 1;

	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);

		if (a[m] === k) return m;

		if (a[s] <= a[m] && a[s] <= k && k <= a[m]) e = m - 1;
		else if (a[m] <= a[e] && a[m] <= k && k <= a[e]) s = m + 1;
		else if (a[s] >= a[m]) e = m - 1;
		else if (a[e] <= a[m]) s = m + 1;
		else return - 1;
	}

	return -1;
}
 
const main = () => {
	log(searchRotatedArray([176, 188, 199, 200, 210, 222, 1, 10, 20, 47], 222))
	log(searchRotatedArray([176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162], 133))
	log(searchRotatedArray([176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162], 2))
}
 
main();