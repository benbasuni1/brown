const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const minNumCoinChange = (n, a) => {
	let dp = new Array(n + 1).fill(Infinity);
	dp[0] = 0;

	for (const coin of a) {
		for (let i = coin; i < dp.length; i++) {
			dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
		}
	}

	return dp[n] !== Infinity ? dp[n] : -1;
}
 
const main = () => {
	log(minNumCoinChange(10, [1, 3, 4]))
	// log(minNumCoinChange(135, [39, 45, 130, 40, 4, 1]))
}
 
main();