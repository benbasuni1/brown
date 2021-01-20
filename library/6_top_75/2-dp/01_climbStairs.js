const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const climbStairs = n => {
	let dp = new Array(n+1).fill(-1); 

	dp[0] = 1;
	dp[1] = 1;

    for (let i = 2; i <= n; i++) {
		dp[i] = dp[i-1] + dp[i-2];

		utils.prettyPrint(dp, i)
		console.log('dp[i - 1]', dp[i - 1])
		console.log('dp[i - 2]', dp[i - 2])
		line();
	}

    return dp[n];
}
 
const main = () => {
	log(climbStairs(5))
}
 
main();
