const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const buySellToMaximize = a => {
	let buy = a[0];
	let sell = a[1];
	let todaysGain = -Infinity;
	let maxProfit = sell - buy;

	for (let i = 1; i < a.length; i++) {
		todaysGain = a[i] - buy;
		if (todaysGain > maxProfit) {
			maxProfit = todaysGain;
			sell = a[i];
		}

		if (a[i] < buy) buy = a[i];
	}

	return [sell - maxProfit, sell];
}
 
const main = () => {
	log(buySellToMaximize([8, 5, 12, 9, 19, 1]))
}
 
main();