const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const singleCycleCheck = a => {
	let i = a[0] % a.length;
	if (i < 0) i += a.length;

	while (true) {
		if (a.every(e => e === Infinity)) return true;
		if (a[i] === Infinity) return false;

		let temp = a[i];
		a[i] = Infinity;

		i = (i + temp) % a.length;
		if (i < 0) i += a.length;
	}
}
 
const main = () => {
	log(singleCycleCheck([2, 3, 1, -4, -4, 2]))
	log(singleCycleCheck([-1, 2, 2]))
}
 
main();