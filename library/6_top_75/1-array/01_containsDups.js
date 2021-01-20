const { helper: utils, log, line } = require('../../__common/utils');

// O(n^2)     - brute force
// O(n log n) - sort
// O(n)       - hash map
 
// 🕑 O(n)
// 🛰 O(n)
const containsDups = a => {
	utils.start(a);
	let storage  = {};

	for (let i = 0; i < a.length; i++) {
		utils.prettyPrint(a, i);
		let item = a[i];
		console.log('storage', storage)

		if (storage[item]) return true;
		storage[item] = 1;
	}

	return false;
}
 
const main = () => {
	log(containsDups([1, 2, 3, 1]))
	// log(containsDups([1, 2, 3, 4]))
}
 
main();