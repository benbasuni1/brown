const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const countdown = a => {
	if (a <= 0) {
		console.log('all done')
		return;
	} else {
		console.log('a', a)
		countdown(a - 1);
	}
}
 
const main = () => {
	countdown(5)
}
 
main();