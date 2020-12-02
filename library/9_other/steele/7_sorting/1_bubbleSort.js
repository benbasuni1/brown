const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(1)
const bubbleSort = a => {
	for (let i = 0; i < a.length; i++) {
		for (let j = i + 1; j < a.length; j++) {
			if (a[i] > a[j]) [a[i], a[j]] = [a[j], a[i]];
		}
	}

	return a;
}
 
const main = () => {
	log(bubbleSort([3, 7, 1, 2, 6, 9, 10, 3, 2]))
}
 
main();