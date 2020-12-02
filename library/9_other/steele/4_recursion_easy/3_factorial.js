const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const factorialIterative = a => {
	let total = 1;
	for (let i = a; i > 1; i--)
		total *= i;

	return total;
}

// 🕑 O(n)
// 🛰 O(n)
const factorialRecursive = a => {
	if (a === 1) return a;
	else return a * factorialRecursive(a - 1);
}
 
const main = () => {
	log(factorialIterative(4))
	log(factorialRecursive(4))
}
 
main();