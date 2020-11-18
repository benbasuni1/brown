const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const runLengthEncoding = s => {
	let i = 0;
	let j = 1;
	let str = '';
	let count = 1;

	while (j <= s.length) {
		if (count === 9) {
			str += `${count}${s[i]}`
			i = j;
			count = 0;
		}

		if (s[i] === s[j]) count++;
		else {
			str += `${count}${s[i]}`
			i = j;
			count = 1;
		}

		j++;
	}

	return str;
}
 
const main = () => {
	log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))
}
 
main();