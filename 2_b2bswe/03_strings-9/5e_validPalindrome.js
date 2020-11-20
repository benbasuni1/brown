const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const validPalindrome = s => {
	s = s.replace(/^[a-zA-Z]$/g, '').toLowerCase().trim();

	let i = 0;
	let j = s.length - 1;

	while (i <= j) {
		if (s[i] !== s[j]) return false;
		i++;
		j--;
	}

	return true;
}
 
const main = () => {
	log(validPalindrome("abcba"))
}
 
main();