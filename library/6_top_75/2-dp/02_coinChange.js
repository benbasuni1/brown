const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(an)
// 🛰 O(n)
const coinChange = (a, n) => {
	let dp = Array(1 + n).fill(Infinity);
	dp[0] = 0;

	for (let coin of a) {
		for (let i = coin; i < dp.length; i++) {
			dp[i] = Math.min(dp[i],  dp[i - coin] + 1);
		}
	}

	return dp[n] === Infinity ? -1 : dp.pop();
}
 
const main = () => {
	log(coinChange([1, 2, 5], 11));
	log(coinChange([1, 3, 4], 10))
}
 
main();