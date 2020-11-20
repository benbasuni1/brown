const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const enumeratePrimesToN = n => {
	if (n <= 1) return []
	
	const output = [];
	const isPrime = Array(n).fill(true)
	
	isPrime[0] = false;
	isPrime[1] = false;
	
	for (let i = 0; i < n; i++) {
		if (isPrime[i]) {
			for (let j = i + i; j < n; j += i) {
				isPrime[j] = false;
			}

			output.push(i);
		}
	}
	
	return output;
}
 
const main = () => {
	log(enumeratePrimesToN(23))
}
 
main();