const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const isPalindrome = s => {
	let i = 0;
	let j = s.length - 1;

	while (i < j) {
		if (s[i] === s[j]) {
			i++;
			j--;
		} else return false;
	}

	return true;
}
 
const main = () => {
	log(isPalindrome("abcdcba"))
	log(isPalindrome("akjsdf"))
}
 
main();