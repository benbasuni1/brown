const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const canPlaceFlowers = (a, n) => {
	let count = 0;
	for (let i = 0; i < a.length && count < n; i++) {
		if (a[i] === 0) {
			let next = i === a.length - 1 ? 0 : a[i + 1];
			let prev = i === 0 ? 0 : a[i - 1];
			if (next === 0 && prev === 0) {
				a[i] = 1;
				count++;
			}
		}
	}

	return count === n;
}
 
const main = () => {
	log(canPlaceFlowers([1,0,0,0,1], 1))
	log(canPlaceFlowers([1,0,0,0,1], 2))
}
 
main();
