const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(a log a + b log b)
// 🛰 O(1)
const smallestDiff = (a, b) => {
	a.sort((a, b) => a - b);
	b.sort((a, b) => a - b);

	let i = 0;
	let j = 0;

	let smallestDiff = Infinity;
	let result = [];

	while (i < a.length && j < b.length) {
		let n1 = a[i];
		let n2 = b[j];

		let currentDiff = Math.abs(n2 - n1);
		if (currentDiff < smallestDiff) {
			smallestDiff = currentDiff;
			result = [n1, n2];
		}

		if (n1 === n2) return [n1, n2];
		else if (n1 < n2) i++;
		else j++;
	}
	
	return result;
}
 
const main = () => {
	log(smallestDiff([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))
	log(smallestDiff([10, 1000],[-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]))
	log(smallestDiff([10, 1000],[-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]))
	log(smallestDiff([10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]))
}
 
main();