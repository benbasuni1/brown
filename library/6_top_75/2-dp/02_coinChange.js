const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(an)
// 🛰 O(n)
const coinChange = (a, n) => {
	const dp = Array(n + 1).fill(Infinity);
	dp[0] = 0;

	for (let i = 1; i <= n; i++) {
		for (const coin of a) {
			utils.prettyPrint(dp, i)
			line();
			if (i - coin >= 0)
				dp[i] = Math.min(dp[i],  dp[i - coin] + 1);
		}
	}
	return dp[n] === Infinity ? -1 : dp[n];
}
 
const main = () => {
	log(coinChange([1, 2, 5], 11));
}
 
main();