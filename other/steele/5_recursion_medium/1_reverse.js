const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const reverse = a => {
	if (a === '') return a;
	return reverse(a.slice(1)) + a[0];
}
 
const main = () => {
	log(reverse('awesome'))
	log(reverse('rithmschool'))
}
 
main();