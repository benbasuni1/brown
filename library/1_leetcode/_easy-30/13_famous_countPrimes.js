const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const countPrimes = n => {
	let count = 0;
	let isPrime = Array(n).fill(true);
	isPrime[0] = false;
	isPrime[1] = false;

	for (let i = 2; i <= n; i++) {
		if (isPrime[i]) {
			for (j = i + i; j <= n; j += i)
				isPrime[j] = false;
			count++;
		}
	}

	return count;
}
 
const main = () => {
	log(countPrimes(10))
	log(countPrimes(0))
	log(countPrimes(1))
}
 
main();