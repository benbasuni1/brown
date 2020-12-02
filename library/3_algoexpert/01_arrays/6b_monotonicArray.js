const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const monotonicArray = a => {
	let direction = a[1] - a[0];
	for (let i = 2; i < a.length; i++) {
		if (direction === 0) {
			direction = a[i] - a[i - 1];
			continue;
		}

		if (breaks(direction, a[i - 1], a[i])) return false;
	}

	return true;
}

const breaks = (direction, prev, curr) => {
	let diff = curr - prev;
	return direction > 0 ? diff < 0 : diff > 0;
}
 
const main = () => {
	log(monotonicArray([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))
}
 
main();