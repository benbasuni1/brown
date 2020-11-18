const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const sameFrequency = (a, b) => {
	a = a.toString();
	b = b.toString();
	if (a.length !== b.length) return false;

	let storage = {};
	
	for (let intA of a)
		storage[intA] = storage[intA] + 1 || 1;

	for (let intB of b) {
		if (!storage[intB]) return false;
		storage[intB]--;
	}

	return true;
}
 
const main = () => {
	log(sameFrequency(281, 182)); // true
	log(sameFrequency(34, 14)); // false
	log(sameFrequency(1234567, 6752431)); // true
	log(sameFrequency(22, 222)); // false
}
 
main();