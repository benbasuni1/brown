const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const areThereDuplicates = (...args) => {
	let storage = {};

	for (let arg of args) {
		if (storage[arg]) return true;
		storage[arg] = 1;
	}

	return false;
}
 
const main = () => {
	log(areThereDuplicates(1, 2, 3, 2)); // true
	log(areThereDuplicates(1, 2, 3));  // false
	log(areThereDuplicates('a', 'b', 'c', 'a'));  // true
}
 
main();