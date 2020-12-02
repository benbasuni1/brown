const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const sumRange = a => {
	if (a === 1) return 1;
	else return a + sumRange(a - 1);
}
 
const main = () => {
	log(sumRange(5))
}
 
main();