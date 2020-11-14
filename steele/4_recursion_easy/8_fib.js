const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const fib = a => {
	let fibHelper = (a, memo) => {
		if (a <= 1) return a;

		if (!memo[a - 2]) memo[a - 2] = fibHelper(a - 2, memo);
		if (!memo[a - 1]) memo[a - 1] = fibHelper(a - 1, memo);

		return memo[a - 2] + memo[a - 1];
	}

	return fibHelper(a, {});
}

const fibIterative = a => {
	let storage = {0 : 0, 1 : 1};

	for (let i = 2; i <= a; i++) {
		storage[i] = storage[i - 2] + storage[i - 1];
	}

	return storage[a];
}
 
const main = () => {
	log(fib(4))
	log(fib(10))
	log(fib(28))
	log(fib(35))
	log(fibIterative(4))
	log(fibIterative(10))
	log(fibIterative(28))
	log(fibIterative(35))
}
 
main();