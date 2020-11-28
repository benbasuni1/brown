const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const happyNumber = n => {
	let slow = n;
	let fast = n;
	
	while (1) {
		slow = digitSquareSum(slow);
		fast = digitSquareSum(digitSquareSum(fast));

		if (slow === fast)
			return slow === 1 ? true : false;
	}
}

const digitSquareSum = n => {
	let sum = 0;

	while (n !== 0) {
		sum += Math.floor((n % 10) * (n % 10));
		n = Math.floor(n / 10);
	}

	return sum;
}
 
const main = () => {
	log(happyNumber(19))
}
 
main();