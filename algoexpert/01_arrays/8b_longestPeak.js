const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const longestPeak = a => {
	let count = 0;
	let maxCount = 0;

	for (let i = 1; i < a.length - 1; i++) {
		let prev = a[i - 1];
		let curr = a[i];
		let next = a[i + 1];

		if (prev < curr && curr > next) {
			let left = i - 1;
			let right = i + 1;
			count = 3;
			while (left > 0 && a[left] > a[left - 1]) {
				count++;
				left--;
			}

			while (right < a.length - 1 && a[right] > a[right + 1]) {
				count++;
				right++;
			}

			if (count > maxCount) maxCount = count;
		}

		count = 0;
	}

	return maxCount;
}
 
const main = () => {
	log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))
	// log(longestPeak([1, 4, 10, 2]))
	log(longestPeak([1, 2, 3, 4, 5, 1]))
}
 
main();