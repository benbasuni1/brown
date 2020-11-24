const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(mn)
// 🛰 O(1)
const rotate90 = a => {
	utils.start(a);
	let size = a.length - 1;

	for (let layer = 0; layer < Math.floor(a.length / 2); layer++) {
		for (let i = layer; i < size - layer; i++) {
			let top = a[layer][i];
			let right = a[i][size - layer];
			let bot = a[size - layer][size - i];
			let left = a[size - i][layer];

			a[layer][i] = left;
			a[i][size - layer] = top;
			a[size - layer][size - i] = right;
			a[size - i][layer] = bot;
		}
	}

	return a;
}
 
const main = () => {
	log(rotate90([
		[ 1,  2,  3, 4],
		[ 5,  6,  7, 8],
		[ 9, 10, 11, 12],
		[13, 14, 15, 16]
	  ]))
}
 
main();