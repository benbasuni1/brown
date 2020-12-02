const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const containerWithMostWater = a => {
	let i = 0;
	let j = a.length - 1;
	water = a[0]

	while (i < j) {
		water = Math.max(water, (j - i) * Math.min(a[i], a[j]))
		if (a[i] < a[j]) i++;
		else j--;
	}

	return water;
}
 
const main = () => {
	log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))
	log(containerWithMostWater([4,3,2,1,4]))
}
 
main();