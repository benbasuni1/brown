const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const numWaysOfCoinChange = (n, a) => {
	let ways = new Array(n + 1).fill(0);
	ways[0] = 1;

	for(let denom of a) {
		for (let i = denom; i <= n; i++) {
			ways[i] += ways[i - denom];
		}
	}

	return ways[n];
}
 
const main = () => {
	log(numWaysOfCoinChange(6, [1,5]))
	log(numWaysOfCoinChange(4, [1, 5, 10, 25]))
	log(numWaysOfCoinChange(25, [1, 5, 10, 25]))
}
 
main();