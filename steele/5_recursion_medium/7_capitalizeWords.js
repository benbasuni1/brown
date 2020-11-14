const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const capitalizeWords = a => {
	if (a.length === 1) return [a[0].toUpperCase()];

	const res = capitalizeWords(a.slice(0, -1));
	const str = a.slice(a.length - 1)[0].toUpperCase();

	res.push(str);

	return res;
}
 
const main = () => {
	log(capitalizeWords(['i', 'am', 'learning', 'recursion']));
}
 
main();