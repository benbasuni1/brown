const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const productOfArray = a => {
	if (a.length === 0) return 1;
	return a[0] * productOfArray(a.slice(1));
};
 
const main = () => {
	log(productOfArray([1, 2, 3]))
	log(productOfArray([1, 2, 3, 10]))
}
 
main();