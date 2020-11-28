
const { helper: utils, log, line } = require('../../__common/utils');
 
// Boyer-Moore Majority Vote Algorithm
// 🕑 O(n)
// 🛰 O(1)
const majorityElement = a => {
	let major = a[0];
	let count = 1;

	for (let i = 1; i < a.length; i++) {
		if (count === 0) {
			count++;
			major = a[i];
		} else if (major === a[i]) count++;
		else count--;
	}

	return major;
}
 
const main = () => {
	log(majorityElement([3, 2, 3]))
	log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
}
 
main();