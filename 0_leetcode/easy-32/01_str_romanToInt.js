const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const romanToInt = s => {
	let sum = 0;
	for (let letter of s) {
		if (letter === 'M') sum += 1000;
		else if (letter === 'D') sum += 500;
		else if (letter === 'C') sum += 100;
		else if (letter === 'L') sum += 50;  
		else if (letter === 'X') sum += 10;
		else if (letter === 'V') sum += 5;
		else if (letter === 'I') sum += 1;
	}

	if (s.includes("IV")) sum -= 2;
	if (s.includes("IX")) sum -= 2;
	if (s.includes("XL")) sum -= 20;
	if (s.includes("XC")) sum -= 20;
	if (s.includes("CD")) sum -= 200;
	if (s.includes("CM")) sum -= 200;

	return sum;
}
 
const main = () => {
	log(romanToInt("MCMXCIV"))
}
 
main();