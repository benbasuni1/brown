const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const findSmallestCommonNum = (a1, a2, a3) => {
	let p1 = 0, p2 = 0, p3 = 0;

	while (p1 < a1.length && p2 < a2.length && p3 < a3.length) {
		if (a1[p1] === a2[p2] && a2[p2] === a3[p3]) return a1[p1];
		let currentMax = Math.max(a1[p1], a2[p2], a3[p3]);

		if (a1[p1] !== currentMax) {
			if (a1[p1] <= currentMax) p1++;
			else break;
		}

		if (a2[p2] !== currentMax) {
			if (a2[p2] <= currentMax) p2++;
			else break;
		}

		if (a3[p3] !== currentMax) {
			if (a3[p3] <= currentMax) p3++;
			else break;
		}

	}

	return -1;
}
 
const main = () => {
	log(findSmallestCommonNum(
		[6,  7, 10, 25, 30, 63, 64], 
		[0, 4, 5, 6, 7, 8, 50], 
		[1, 6, 10, 14]
	))
}
 
main();