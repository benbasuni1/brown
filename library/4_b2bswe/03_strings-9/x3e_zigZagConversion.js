const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(max(s, cols))
// 🛰 O(max(s, cols))
const zigZagConversion = (s, cols) => {
	let result = Array(cols).fill("");
	let col = 0;
	let down = false;

	for (let i = 0; i < s.length; i++) {
		result[col] += s[i];
		console.log('result', result)
		utils.vars('col', col, 'down', down);

		// if edges are not at the beginning or end 
		if (col === 0 || col === cols - 1) down = !down;

		if (cols > 1) {
			if (!down) col--;
			else col++;
		}
	}
	
	return combine(result);
}
 
const combine = s => {
	let result = "";
	s.forEach(col => result += col);
	return result;
}

const main = () => {
	log(zigZagConversion("YELLOWPINK",  4))
}
 
main();