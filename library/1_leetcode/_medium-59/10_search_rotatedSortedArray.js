const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const searchRotatedArray = (a, k) => {
	if (!a.length) return -1;
	let s = 0;
	let e = a.length - 1;

	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		
		if (a[m] === k) return m;
		
		if (a[m] <= a[e]) {
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
	// log(searchRotatedArray([4,5,6,7,0,1,2], 0))
	// log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3))
	// log(searchRotatedArray([1], 0))
	log(searchRotatedArray([1, 3], 3))
}
 
main();