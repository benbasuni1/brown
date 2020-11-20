const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(max(s, rows))
// 🛰 O(max(s, rows))
const zigZagConversion = (s, rows) => {
	let result = Array(rows).fill("");
	let row = 0;
	let down = false;

	for (let i = 0; i < s.length; i++) {
		result[row] += s.charAt(i);

		if (row === 0 || row === rows - 1) down = !down;

		if (rows > 1) {
			if (!down) row--;
			else row++;
		}
	}

	return combine(result);
}
 
const combine = (rowsOfStrings) => {
	let result = "";
  
	rowsOfStrings.forEach((rowString) => {
	  result += rowString;
	});
  
	return result;
}
const main = () => {
	log(zigZagConversion("YELLOWPINK",  4))
}
 
main();

/*
	const result = Array(rows).fill("");
	
	let row = 0;
	let down = false;

	for (let i = 0; i < s.length; i++) {
		result[row] += s.charAt(i);

		if (row == 0 || row == rows - 1) down = !down;

		if (rows > 1) {
			if (down) row++;
			else row--;
		}
	}
	return combine(result);
*/