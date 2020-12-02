const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const capitalizeFirst = a => {
	if (a.length === 1) return [a[0][0].toUpperCase() + a[0].substr(1)];

	let res = capitalizeFirst(a.slice(0, -1));
	let last = a.slice(a.length - 1)[0][0].toUpperCase() + a.slice(a.length-1)[0].substr(1);

	res.push(last);

	return res;
}
 
const main = () => {
	log(capitalizeFirst(['car','taco','banana']))
}
 
main();