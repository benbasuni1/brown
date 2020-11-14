const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const moveElementToEnd = (a, x) => {
	let i = 0;
	let j = a.length - 1;

	while (a[j] === x) j--;

	while (i < j) {
		if (a[j] === x) j--;
		if (a[i] === x) {
			[a[i], a[j]] = [a[j], a[i]];
			j--;
		}

		i++;
	}

	return a;
}
 
const main = () => {
	log(moveElementToEnd([5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12], 5))
	log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))

}
 
main();