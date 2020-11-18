const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const insertionSort = a => {
	let b = 1;
	let i = 1;

	while (i < a.length) {
		while (a[b] < a[b - 1] && b > 0) {
			[a[b], a[b - 1]] = [a[b - 1], a[b]]
			b--;
		}

		i++;
		b = i;
	}

	return a;
}
 
const main = () => {
	log(insertionSort([8, 5, 2, 9, 5, 6, 3]))
	log(insertionSort([
		8,
		-6,
		7,
		10,
		8,
		-1,
		6,
		2,
		4,
		-5,
		1,
		10,
		8,
		-10,
		-9,
		-10,
		8,
		9,
		-2,
		7,
		-2,
		4
	  ]))

}
// 2, 5, 5, 8, 9, 6, 3
//                ib
// 0, 1, 2, 3, 4, 5, 6
 
main();