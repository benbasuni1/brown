const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const validateSubsequence = (long, seq) => {
	let i = 0;
	let j = 0;

	if (long.length === 0 || seq === '') return false;

	while (i < long.length) {
		if (long[i] === seq[j]) j++;
		i++;
	}

	return j === seq.length;
}
 
const main = () => {
	log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
}
 
main();