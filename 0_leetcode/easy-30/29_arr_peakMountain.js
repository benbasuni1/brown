const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const peakIndexInMountainArray2 = a => {
	let s = 0;
	let e = a.length - 1;

	while (s <= e) {
		let m = Math.floor(s - (e + s) / 2);
		let prev = a[m - 1];
		let curr = a[m];
		let next = a[m + 1];

		if (prev < curr && curr > next) return m;
		else if (prev > curr) e = m - 1;
		else s = m + 1;
	}

	return -1;
}

// 🕑 O(n)
// 🛰 O(1)
const peakIndexInMountainArray = a => {
	for (let i = 1; i < a.length - 1; i++) {
		let prev = a[i - 1];
		let curr = a[i];
		let next = a[i + 1];

		if (prev < curr && curr > next) return i;
	}
}

 
const main = () => {
	log(peakIndexInMountainArray([0,1,0]))
	log(peakIndexInMountainArray([0,2,1,0]))
	log(peakIndexInMountainArray([0,10, 5, 2]))
	log(peakIndexInMountainArray([3, 4, 5, 1]))
	log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]))
}
 
main();