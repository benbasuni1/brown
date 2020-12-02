const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const moveZeroesToLeft = a => {
	let read = a.length - 1;
	let write = a.length - 1;

	while (read >= 0) {
		if (a[read] !== 0) {
			a[write] = a[read];
			write--;
		}

		read--;
	}

	while (write >= 0) {
		a[write] = 0;
		write--;
	}

	return a;
}
 
const main = () => {
	log(moveZeroesToLeft([1,10,-1,11,5,0,-7,0,25,-35]))
}
 
main();