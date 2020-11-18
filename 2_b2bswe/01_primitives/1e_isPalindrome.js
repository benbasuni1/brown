const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const isPalindrome = x => {
	if (x < 0) return false;

	// Get length of a number
	let xLen = Math.floor(Math.log10(x)) + 1;

	// Get Bit Mask
	let mask = Math.floor(Math.pow(10, xLen - 1));

	for (let i = 0; i < x / 2; i++) {
		//+left
		let left = Math.floor(x / mask);

		//+right
		let right = x % 10;

		if (left !== right) return false;

		//-left
		x %= mask;

		//-right
		x = Math.floor(x / 10);

		//update mask
		mask /= 100;
	}

	return true;
}
 
const main = () => {
	// F F T T F
	log(isPalindrome(1234))
	log(isPalindrome(923498291391823))
	log(isPalindrome(12321))
	log(isPalindrome(1))
	log(isPalindrome(-121))
}
 
main();