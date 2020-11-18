// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	let results = [];

	for (let i = 0; i < n; i++) results.push([]);

	let counter = 1;
	let initRow = 0;
	let initCol = 0;
	let endRow = n - 1;
	let endCol = n - 1;

	while (initRow <= endRow && initCol <= endCol) {
		for (let i = initCol; i <= endCol; i++) {
			results[initRow][i] = counter;
			counter++;
		}

		initRow++;

		for (let i = initRow; i <= endRow; i++) {
			results[i][endCol] = counter;
			counter++;
		}

		endCol--;

		for (let i = endCol; i >= initCol; i--) {
			results[endRow][i] = counter;
			counter++;
		}

		endRow--;

		for (let i = endRow; i >= initRow; i--) {
			results[i][initCol] = counter;
			counter++;
		}

		initCol++;
	}

	console.log('results', results)
	return results;
}

matrix(4);

module.exports = matrix;
