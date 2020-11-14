const { helper: utils, log, line } = require('../../interview-camp/__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const stringifyNumbers = a => {
	let b = {};

	for (let key in a) {
		let curr = a[key];

		if (typeof(curr) === 'number') b[key] = curr.toString();
		else if (typeof(curr) === 'object' && !Array.isArray(curr)) b[key] = stringifyNumbers(curr);
		else b[key] = a[key];
	}

	return b;
}

 
const main = () => {
	let obj = {
		num: 1,
		test: [],
		data: {
			val: 4,
			info: {
				isRight: true,
				random: 66
			}
		}
	}

	log(stringifyNumbers(obj));
}
 
main();