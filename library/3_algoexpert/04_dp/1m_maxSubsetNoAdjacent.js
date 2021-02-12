const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const maxSubsetAdjacent = a => {
	if (!a.length) return 0;
	if (a.length === 1) return a[0];
	
	let dp = [
		a[0],
		Math.max(a[0, a[1]])
	]
	
	for (let i = 2; i < a.length; i++) {
		dp[i] = Math.max(dp[i - 2] + a[i], dp[i - 1]);
	}
	
	return dp[dp.length - 1];
}
 
const main = () => {
	log(maxSubsetAdjacent([75, 105, 120, 75, 90, 135]))
}
 
main();