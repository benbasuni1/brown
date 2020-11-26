const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const validateSubSequence = (long, short) => {
	let i = 0;
	let j = 0;

	if (long.length === 0 || short=== '') return false;

	while (i < long.length) {
		if (long[i] === short[j]) j++;
		i++;
	}

	return j === short.length;
}
 
const main = () => {
	log(validateSubSequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
}
 
main();