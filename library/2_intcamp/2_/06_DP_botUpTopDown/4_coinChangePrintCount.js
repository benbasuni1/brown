const u = require('../../../__common/utils');
 
// 🕑 O(an)
// 🛰 O(n)
const coinChangePrintCount = (n, a) => {
	let dp = Array(1 + n).fill(0);
	dp[0] = 1;

	for (let coin of a) {
		for (let i = coin; i < dp.length; i++) {
			dp[i] = dp[i] + dp[i - coin]
		}
	}

	return dp.pop();
}
 
const main = () => {
	console.log(coinChangePrintCount(5, [1, 2, 5]));
}
 
main();