const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const minNumCoinChange = (n, d) => {
	const numOfCoins = new Array(n + 1).fill(Infinity);
	numOfCoins[0] = 0;

	for (const denom of d) {
		for (let i = denom; i < numOfCoins.length; i++) {
			numOfCoins[i] = Math.min(numOfCoins[i - denom] + 1, numOfCoins[i]);
		}
	}

	return numOfCoins !== Infinity ? numOfCoins[n] : -1;
}
 
const main = () => {
	log(minNumCoinChange(10, [1, 3, 4]))
	log(minNumCoinChange(135, [39, 45, 130, 40, 4, 1]))
}
 
main();