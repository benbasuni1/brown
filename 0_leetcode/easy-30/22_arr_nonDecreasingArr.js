const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const nonDecreasingArray = a => {
	let count = 0;
	for (let i = 1; i < a.length && count <= 1; i++) {
		if (a[i - 1] > a[i]) {
			count++;
			if (i - 2 < 0 || a[i - 2] <= a[i])
				a[i - 1] = a[i];
			else a[i] = a[i - 1];
		}
	}

	return count <= 1;
}
 
const main = () => {
	log(nonDecreasingArray([4, 2, 3]))
	log(nonDecreasingArray([4, 2, 1]))
}
 
main();