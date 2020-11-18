// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//   x  y  z
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
	// return fibMemo(n);
	return fibIterative(n)
}

const fibMemo = (n, memo = {}) => {
	if (n < 2) return n;
	else {
		if (!memo[n - 2]) memo[n - 2] = fibMemo(n - 2, memo);
		if (!memo[n - 1]) memo[n - 1] = fibMemo(n - 1, memo);
	}

	return memo[n - 2] + memo[n - 1];
}

const fibIterative = n => {
	let storage = {0 : 0, 1: 1};

	for (let i = 2; i <= n; i++) 
		storage[i] = storage[i - 2] + storage[i - 1];

	return storage[n];
}

fibIterative(15);

module.exports = fib;
