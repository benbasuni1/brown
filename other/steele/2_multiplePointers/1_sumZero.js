const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(1)
const sumZeroNaive = a => {
	for (let i = 0; i < a.length; i++) {
		for (let j = i + 1; j < a.length; j++) {
			if (a[i] + a[j] === 0) return [a[i], a[j]];
		}
	}

	return [];
}

// 🕑 O(n)
// 🛰 O(1)
const sumZero = a => {
	let i = 0;
	let j = a.length - 1;

	while (i < j) {
		if (a[i] + a[j] === 0) return [a[i], a[j]];
		else if (a[i] + a[j] > 0) j--;
		else i++;
	}

	return [];
}
 
const main = () => {
	log(sumZeroNaive([-3, -2, -1, 0, 1, 2, 3]));
	log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
}
 
main();