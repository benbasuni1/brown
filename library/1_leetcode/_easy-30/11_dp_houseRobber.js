const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const houseRobber = a => {
	if (a.length === 0) return 0;
	else if (a.length === 1) return a[0];

	let dp = [a[0], Math.max(a[0], a[1])];
  
	for (let i = 2; i < a.length; i++)
	  dp[i] = Math.max(a[i] + dp[i - 2] , dp[i - 1]);
  
	return dp.pop();
}
 
const main = () => {
	log(houseRobber([1,2,3,1]))
	log(houseRobber([2,7,9,3,1]))
}
 
main();