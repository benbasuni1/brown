const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const sortColors = a => {
	let p1 = 0;
	let p2 = 0;
	let p3 = a.length - 1;

	while (p2 <= p3) {
		if (a[p2] === 1) p2++;
		else if (a[p1] === 0) {
			[a[p1], a[p2]] = [a[p2], a[p1]]
			p1++;
			p2++;
		}  else {
			[a[p2], a[p3]] = [a[p3], a[p2]]
			p3--;
		}
	}

	return a;
}
 
const main = () => {
	// log(sortColors([2,0,2,1,1,0]))
	log(sortColors([1, 2]))
}
 
main();