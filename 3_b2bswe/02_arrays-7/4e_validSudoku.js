const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(mn)
// 🛰 O(n)
const validSudoku = m => {
	utils.start(m);
	for (let i = 0; i < 9; i++) {
		let rowMap = {};
		let colMap = {};
		let boxMap = {};

		for (let j = 0; j < 9; j++) {
			let row = m[i][j];
			let col = m[j][i];
			let box = m[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
			
			if (row !== '.') {
				if (row in rowMap) return false;
				rowMap[row] = 1;
			}
			
			if (col !== '.') {
				if (col in colMap) return false;
				colMap[col] = 1;
			}

			if (box !== '.') {
				if (box in boxMap) return false;
				boxMap[box] = 1;
			}
		}
	}

	return true;
}
 
const main = () => {
	log(validSudoku([
		["5","3",".",".","7",".",".",".","."]
		,["6",".",".","1","9","5",".",".","."]
		,[".","9","8",".",".",".",".","6","."]
		,["8",".",".",".","6",".",".",".","3"]
		,["4",".",".","8",".","3",".",".","1"]
		,["7",".",".",".","2",".",".",".","6"]
		,[".","6",".",".",".",".","2","8","."]
		,[".",".",".","4","1","9",".",".","5"]
		,[".",".",".",".","8",".",".","7","9"]
	]))
}
 
main();