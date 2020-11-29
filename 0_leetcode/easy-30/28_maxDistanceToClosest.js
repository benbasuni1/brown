const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const maxDistToClosest = a => {
	let result = 0;
	let last = -1;

	for (let i = 0; i < a.length; i++) {
		if (a[i] === 1) {
			result = last < 0 ? i : Math.max(result, (i - last) / 2);
			last = i;
		}
	}

	return Math.floor(Math.max(result, a.length - last - 1));
}
 
const main = () => {
	log(maxDistToClosest([1,0,0,0,1,0,1]))
	log(maxDistToClosest([1,0,0,0]))
	log(maxDistToClosest([1,0,0,1]))
}
 
main();