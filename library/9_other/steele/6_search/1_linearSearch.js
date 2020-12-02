const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const linearSearch = (a, x) => {
	for (let i = 0; i < a.length; i++) {
		if (a[i] === x) return i;
	}

	return -1;
}
 
const main = () => {
	log(linearSearch([10, 15, 20, 25, 10, 30], 15))
	log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1], 4))
	log(linearSearch([100], 100))
	log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1], 10))
	log(linearSearch([100], 200))
}
 
main();