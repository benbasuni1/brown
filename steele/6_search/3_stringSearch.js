const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const stringSearch = (a, b) => {
	let short = a.length < b.length ? a : b;
	let long = a.length < b.length ? b : a;

	let i = 0;
	let j = 0;
	let count = 0;

	while (i < long.length) {
		if (long[i] === short[j]) {
			if (j === short.length - 1) {
				count++;
				j = 0;
			} else {
				j++;
			}
		}

		i++;
	}

	return count;
}
 
const main = () => {
	log(stringSearch('lorie lolelold', 'lol'))
}
 
main();