const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const rotateArrayByN = (a, n) => {
	n %= a.length;
	if (n < 0) n += a.length;

	reverse(a, 0, a.length - 1);
	reverse(a, 0, n - 1);
	reverse(a, n, a.length - 1);

	return a;
}

const reverse = (a, s, e) => {
	while (s <= e) {
		[a[s], a[e]] = [a[e], a[s]]
		s++;
		e--;
	}

	return a;
}
 
const main = () => {
	log(rotateArrayByN([1, 2, 3, 4, 5], 2)) // [4, 5, 1, 2, 3]
	// log(rotateArrayByN([1, 2, 3, 4, 5], -2)) // [3, 4, 5, 1, 2]
	//
	// log(rotateArrayByN([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2))
}
 
main();