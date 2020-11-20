const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n * m)
// 🛰 O(1)
const spiralTraverse = a => {
	// 34+12+.43x-21y- 
	// 1+4-2-3+ [o o]

	let initRow = 0; // 1
	let endRow = a.length - 1; // 2
	let initCol = 0; // 3
	let endCol = a[0].length - 1; // 4

	let result = [];

	while (initRow <= endRow && initCol <= endCol) {

		for (let i = initCol; i <= endCol; i++) {
			result.push(a[initRow][i]);
		}

		initRow++;

		for (let i = initRow; i <= endRow; i++) {
			result.push(a[i][endCol]);
		}

		endCol--;

		if (initRow <= endRow) {
			for (let i = endCol; i >= initCol; i--) {
				result.push(a[endRow][i]);
			}
		}

		endRow--;

		if (initCol <= endCol) {
			for (let i = endRow; i >=initRow; i--) {
				result.push(a[i][initCol]);
			}
		}

		initCol++;
	}

	return result;
}
 
const main = () => {
	// log(spiralTraverse([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]))
	// log(spiralTraverse([[4, 2, 3, 6, 7, 8, 1, 9, 5, 10], [12, 19, 15, 16, 20, 18, 13, 17, 11, 14]]))
	log(spiralTraverse([
		[1, 2, 3], 
		[12, 13, 4], 
		[11, 14, 5], 
		[10, 15, 6], 
		[9, 8, 7]
	]))
}
 
main();