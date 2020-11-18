const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const fib = a => {
	if (a <= 1) return a;
	return fib(a - 1) + fib(a - 2);
}

const fibMemo = a => {
	let helper = (a, memo = {0:0, 1:1}) => {
		if (a <= 1) return a;
		if (!memo[a - 2]) memo[a - 2] = helper(a - 2, memo);
		if (!memo[a - 1]) memo[a - 1] = helper(a - 1, memo);

		return memo[a - 2] + memo[a - 1];
	}

	return helper(a);
}

const fibIterative = a => {
	let storage = {0: 0, 1: 1};

	for (let i = 2; i <= a; i++) {
		storage[i] = storage[i - 2] + storage[i - 1];
	}

	return storage[a];
}
 
const main = () => {
	log(fib(10))
	log(fibMemo(10))
	log(fibIterative(10))
}
 
main();