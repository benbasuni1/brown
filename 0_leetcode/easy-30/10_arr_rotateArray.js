const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const rotateArray = (a, k) => {
	k %= a.length;
	reverse(a, 0, a.length - 1);
	reverse(a, 0, k - 1);
	return reverse(a, k, a.length - 1);
}

const reverse = (a, init = 0, end = a.length - 1) => {
	while (init <= end) {
		[a[init], a[end]] = [a[end], a[init]];
		init++;
		end--;
	}

	return a;
}
 
const main = () => {
	log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))
	log(rotateArray([-1, -100, 3, 99], 2))
}
 
main();