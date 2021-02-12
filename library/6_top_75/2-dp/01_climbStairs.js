const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const climbStairs = n => {
	let dp = [1, 1]

    for (let i = 2; i <= n; i++)
		dp[i] = dp[i - 1] + dp[i - 2];

    return dp.pop();
}
 
const main = () => {
	log(climbStairs(5))
}
 
main();
