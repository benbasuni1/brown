const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const mergeIntervals = a => {
	let result = [];
	let currPair = a[0];

	for (let i = 1; i < a.length; i++) {
		if (a[i][0] > currPair[1]) {
			result.push(currPair);
			currPair = a[i];
		}

		if (a[i][1] > currPair[1]) currPair[1] = a[i][1];
		if (i === a.length - 1) result.push(currPair);
	}

	return result;
}
 
const main = () => {
	log(mergeIntervals([[1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [10, 15]]))
}
 
main();