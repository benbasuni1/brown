const u = require('../../../__common/utils');
 
// Time  o(2^n)
// Space o(n)
const fibDefault = x => {
	if (x <= 2) return 1;
	return fib(x-1) + fib(x-2);
}

function fibonacci(x) {
	if (x <= 2) return 1;
	
	const x1 = fibonacci(x - 1);
	const x2 = fibonacci(x - 2);

	return x1 + x2;
}

function fibonacci2(x) {
	return fibHelper(x, {});
}

function fibHelper(x, memo) {
	if (x <= 2) return 1;
	if (memo.hasOwnProperty(x)) return memo[x];

	let result = fibHelper(x - 1, memo) + fibHelper(x - 2, memo);
	memo[x] = result

	return result;
}

const fib = x => {
	if (x <= 2) return 1;
	let dp = [0, 1];

	for (let i = 2; i <= x; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	console.log('dp', dp)
	return dp.pop();
}
 
const main = () => {
	// console.log(fib(8));
	// console.log('fibonacci(5)', fibonacci(5))
	console.log('fibonacci2(10)', fibonacci2(10))
	console.log('fib(10)', fib(10))
}
 
main();