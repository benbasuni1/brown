const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const productSum = a => {
	return helper(a);
}

const helper = (a, multiplier = 1) => {
	let sum = 0;
	for (let i = 0; i < a.length; i++) {
		if (Array.isArray(a[i])) 
			sum += helper(a[i], multiplier + 1);
		else	
			sum += a[i];
	}

	return sum * multiplier;
}
 
const main = () => {
	log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))
}
 
main();