const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const nextPermutation = a => {
	let i = a.length - 2;
	let j = a.length - 1;

	while (i >= 0 && a[i] >= a[i + 1]) i--;

	if (i >= 0) {
		while (j >= 0 && a[i] >= a[j]) j--;
		[a[i], a[j]] = [a[j], a[i]]
	}

	return reverse(a, i + 1);
}

const reverse = (a, start) => {
	let left = start;
	let right = a.length - 1;
	while (left <= right) {
		[a[left], a[right]] = [a[left], a[right]];
		left++;
		right--;
	}

	return a;
}
 
const main = () => {
	// log(nextPermutation([1,2,3]))
	// log(nextPermutation([1,5,2]))
	// log(nextPermutation([6, 2, 3, 0, 1, 4, 5]))
	log(nextPermutation([1, 4, 5, 3, 2, 1]))
	// log(nextPermutation([3,2,1]))
}
 
main();