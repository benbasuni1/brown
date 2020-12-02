const { helper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n log n)
// 🛰 O(log n)
const quickSort = a => {
	const helper = (a, s, e) => {
		if (s >= e) return a
		
		let pivot = a[s]
		let left = s
		for (let i = s + 1; i <= e; i++) {
			let right = i
			if (a[right] < pivot) {
				left++
				[a[left], a[right]] = [a[right], a[left]]
			}
		}

		[a[left], a[s]] = [a[s], a[left]]
		
		helper(a, s, left - 1)
		helper(a, left + 1, e)
		return a
	}

	return helper(a, 0, a.length - 1);
}

const main = () => {
	log(quickSort([55, 23, 26, 2, 25]))
}
 
main();