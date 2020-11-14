const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const countUniqueValues = a => {
	let i = 0;
	let j = 1;

	while (j <= a.length) {
		if (a[i] !== a[j]) {
			i++;
			if (j - 1 > 1) a[i] = a[j];
		}
		
		j++;
	}

	return i;
}
 
const main = () => {
	countUniqueValues([1, 1, 1, 1, 1, 2]);
	countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
	countUniqueValues([]);
	countUniqueValues([-2, -1, -1, 0, 1]);
}
 
main();