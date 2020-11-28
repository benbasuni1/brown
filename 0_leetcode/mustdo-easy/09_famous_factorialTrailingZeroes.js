const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const trailingZeroes = n => {
	let result = 0;

	for (let i = 5; i <= n; i *= 5) 
		result += Math.floor(n / i);

	return result;
}
 
const main = () => {
	log(trailingZeroes(3))
	log(trailingZeroes(5))
	log(trailingZeroes(16))
}
 
main();