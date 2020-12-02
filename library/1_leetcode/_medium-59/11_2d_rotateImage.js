const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(mn)
// 🛰 O(1)
const rotateMatrix = a => {
	let size = a.length - 1;
	for (let layer = 0; layer < a.length / 2; layer++) {
		for (let i = layer; i < size - layer; i++) {
			let top = a[layer][i];
			let right = a[i][size - layer];
			let bottom = a[size - layer][size - i];
			let left = a[size - i][layer];

			a[layer][i] = left;
			a[i][size - layer] = top;
			a[size - layer][size - i] = right;
			a[size - i][layer] = bottom;
		}
	}

	return a;
}
 
const main = () => {
	// log(rotateMatrix([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))
	log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]));
}
 
main();