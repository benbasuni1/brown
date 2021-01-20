/*
Time complexity
Space complexity

1. O(1)
2. O(log n)
3. O(n)
4. O(n log n)
5. O(n^2)
6. O(n!)
*/

const { line } = require("../../../current/__common/utils");

/* --- Time --- */
// 1. O(1)
const constant = a => {
	return 1;
}

// 2. O(log n)
const logN = n => {
	for (let i = 1; i < n; i *= 2) {
		console.log(i)
	}
}

/*
 [1, 2, 3, 4, 5, 6, 7, 8]
  1
 [1, 2, 3, 4]
  2
 [1, 2]
  3
 [1]
  4
*/


// 3. O(n)
const linear = n => {
	for (let i = 1; i < n; i++) {
		console.log(i)
	}
}

// logN(20000000);
// linear(20);

// 4. O(n log n)
const nLogN = n => {
	// sorting
	for (let i = 1; i < n; i++) {
		for (let j = i; j < n; j *= 2) {
			console.log('j', j)
		}
	}
}
/*
nLogN(10);

const algorithm1 = a => {
	a.sort((a, b) => a - b);
	return a;
}
console.log(algorithm1([1, 7, 2, 5, 9, 13]))

// [1, 2, 5, 7, 9, 13]
*/

// 5. O(n^2)
const quadratic = a => {
	for (let i = 0; i < a.length; i++) {
		for (let j = i; j < a.length; j++) {
			console.log(i)
		}
	}
}

// 6. O(n!) - Factorial (Fibonacci)
// Permutations/Combinations