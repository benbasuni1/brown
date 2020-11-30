const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const generateParens = n => {
	const res = [];

	const fh = (left, right, s) => {
		if (left > right) return;

		if (left === 0 && right === 0) {
			res.push(s);
			return;
		}

		if (left > 0) fh(left - 1, right, s + '(');
		if (right > 0) fh(left, right - 1, s + ')');
	}

	fh(n ,n, '');
	return res;
}
 
const main = () => {
	log(generateParens(3))
}
 
main();