const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const collectOddValues = a => {
	let result = [];

	let helperRec = a => {
		if (!a.length) return;
		else {
			if (a[0] % 2 !== 0) result.push(a[0]);
			helperRec(a.slice(1));
		}
	}

	helperRec(a);

	return result;
}
 
const main = () => {
	log(collectOddValues([1,2,3,4,5,6,7,8,9]))
}
 
main();