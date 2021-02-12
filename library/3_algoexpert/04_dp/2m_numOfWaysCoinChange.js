const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const numWaysOfCoinChange = (n, a) => {
	let dp = new Array(n + 1).fill(0);
	dp[0] = 1;

	for(let item of a) {
		console.log('item', item)
		for (let i = item; i <= n; i++) {
			console.log('i', i)
			dp[i] += dp[i - item];
			utils.prettyPrint(dp); line();
		}
	}

	return dp[n];
}
 
const main = () => {
	log(numWaysOfCoinChange(6, [1,5]))
	// log(numWaysOfCoinChange(4, [1, 5, 10, 25]))
	// log(numWaysOfCoinChange(25, [1, 5, 10, 25]))
}
 
main();