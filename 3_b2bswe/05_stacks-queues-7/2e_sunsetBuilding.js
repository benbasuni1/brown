const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const sunsetBuildings = a => {
	let result = [0];
	let currMax = a[0];

	for (let i = 1; i < a.length; i++) {
		let building = a[i];

		if (building > currMax) {
			result.push(i);
			currMax = building;
		} else continue;
	}

	return result;
}
 
const main = () => {
	log(sunsetBuildings([11, 12, 13, 14, 15]))
	log(sunsetBuildings([7, 4, 8, 2, 9]))
}
 
main();