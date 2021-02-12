 
// Time  o(n)
// Space o(n)
const climbingStepsBottomUp = n => {
	let dp = new Array(1 + n).fill(0)
	dp[0] = 1;

	for (let i = 0; i < dp.length; i++) {
		if (i + 1 < dp.length)
			dp[i + 1] += dp[i];

		if (i + 3 < dp.length)
			dp[i + 3] += dp[i];

		if (i + 5 < dp.length)
			dp[i + 5] += dp[i];
	}

	return dp.pop();
 }
 
const main = () => {
	climbingStepsBottomUp(8);
}
 
main();