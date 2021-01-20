const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const buySellStock = a => {
	let min = Infinity;
	let max = -Infinity;

	for (let num of a) {
		min = Math.min(num, min);
		max = Math.max(max, num - min);
	}

	return max;
}
 
const main = () => {
	log(buySellStock([7, 1, 5, 3, 6, 4]))
}

main();
  
