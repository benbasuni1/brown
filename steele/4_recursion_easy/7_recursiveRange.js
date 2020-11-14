const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const recursiveRange = a => {
	if (a <= 1) return a;
	return a + recursiveRange(a - 1);
}
 
const main = () => {
	log(recursiveRange(6))
	log(recursiveRange(10))
}
 
main();