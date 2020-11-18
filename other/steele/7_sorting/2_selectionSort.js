const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(1)
const selectionSort = a => {
	for (let i = 0; i < a.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < a.length; j++) {
			if (a[j] < a[minIndex]) minIndex = j;
		}

		[a[i], a[minIndex]] = [a[minIndex], a[i]];
	}

	return a;
}
 
const main = () => {
	log(selectionSort([3, 7, 1, 2, 6, 9, 10, 3, 2]))
}
 
main();