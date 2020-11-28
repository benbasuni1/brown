const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const houseRobber = a => {
	if (a.length === 0) return 0;
	else if (a.length === 1) return a[0];

	let memo = {
		0: a[0],
		1: Math.max(a[0], a[1])
	};
  
	for(let i = 2; i < a.length; i++)
	  memo[i] = Math.max(a[i] + memo[i - 2] , memo[i - 1]);
  
	return memo[a.length - 1];
}
 
const main = () => {
	log(houseRobber([1,2,3,1]))
	log(houseRobber([2,7,9,3,1]))
}
 
main();