// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples

// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(a, x) {
	let res = [];
	let buf = [];

	for (let i = 0; i < a.length; i++) {
		buf.push(a[i]);
		if (i % x === x - 1) {
			res.push(buf);
			buf = [];
		}
	}

	if (buf.length) res.push(buf);

	return res;
}

function chunk2(a, x) {
	let result = [];
	let i = 0;

	while (i < a.length) {
		result.push(a.slice(i, i + x));
		i += x;
	}

	if (i < a.length) result.push(a.slice(i, a.length))

	console.log('result', result)
	return result;
}

chunk([1, 2, 3, 4], 2);
chunk([1, 2, 3, 4, 5], 2)
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
chunk([1, 2, 3, 4, 5], 4)
chunk([1, 2, 3, 4, 5], 10)
			
module.exports = chunk;