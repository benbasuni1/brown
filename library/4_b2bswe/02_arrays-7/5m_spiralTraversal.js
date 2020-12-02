const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(mn)
// 🛰 O(n)
const spiralTraversal = m => {
	let initRow = 0;
	let endRow = m.length - 1;
	let initCol = 0;
	let endCol = m[0].length - 1;
	let result = [];

	while (initRow <= endRow && initCol <= endCol) {
		utils.vars('initRow', initRow, 'initCol', initCol, 'endRow', endRow, 'endCol', endCol);

		for (let i = initCol; i <= endCol; i++) {
			result.push(m[initRow][i]);
		}

		initRow++;

		for (let i = initRow; i <= endRow; i++) {
			result.push(m[i][endCol]);
		}

		endCol--;

		if (initRow <= endRow) {
			for (let i = endCol; i >= initCol; i--) {
				result.push(m[endRow][i]);
			}

			endRow--;
		}

		if (initCol <= endCol) {
			for (let i = endRow; i >= initRow; i--) {
				result.push(m[i][initCol]);
			}

			initCol++;
		}
	}

	return result;
}
 
const main = () => {
	log(spiralTraversal([
		[ 1, 2, 3],
		[ 4, 5, 6],
		[ 7, 8, 9]
	   ]))
}
 
main();