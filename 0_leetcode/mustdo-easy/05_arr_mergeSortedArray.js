const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(m + n)
// 🛰 O(1)
const mergeSortedArray = (a1, m, a2, n) => {
	let idx = a1.length - 1;

	m -= 1;
	n -= 1;

	while (m >= 0 && n >= 0) {
		if (a1[m] >= a2[n]) {
			a1[idx] = a1[m];
			m--;
		} else {
			a1[idx] = a2[n];
			n--;
		}
		idx--;
	}

	while (n >= 0) {
		a1[idx] = a2[n];
		idx--;
		n--;
	}

	return a1;
}
 
const main = () => {
	log(mergeSortedArray([1,2,3,0,0,0], 3, [2,5,6], 3))
}
 
main();