const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const power = (a, x) => {
	if (x === 0) return 1;
	if (x === 1) return a;

	return (x % 2 === 0) ? 
		power(a * a, x / 2) : 
		power(a * a, (x - 1) / 2) * a;
}
 
const main = () => {
	log(power(2, 0))
	log(power(2, 2))
	log(power(2, 4))
}
 
main();