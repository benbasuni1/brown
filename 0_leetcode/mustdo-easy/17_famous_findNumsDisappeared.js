const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const findNumsDisappeared = a => {
	let res = [];

	for (let i = 0; i < a.length; i++) {
		let m = Math.abs(a[i]) - 1;
		a[m] = a[m] > 0 ? -a[m] : a[m];
	}

	for (let i = 0; i < a.length; i++)
		if (a[i] > 0) res.push(i + 1);

	return res;
}
 
const main = () => {
	log(findNumsDisappeared([4,3,2,7,8,2,3,1]))
}
 
main();
