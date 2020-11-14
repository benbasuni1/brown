const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const averagePair = (a, x) => {
	let i = 0;
	let j = a.length - 1;

	while (i < j) {
		let avg = (a[i] + a[j]) / 2;

		if (avg === x) return [a[i], a[j]];
		else if (avg > x) j--;
		else i++;
	}

	return false;
}
 
const main = () => {
	log(averagePair([1, 2, 3], 2.5));
	log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
	log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
	log(averagePair([], 4));
}
 
main();