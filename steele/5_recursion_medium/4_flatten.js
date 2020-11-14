const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const flatten = a => {
	let res = [];

	for (let i = 0; i < a.length; i++) {
		let curr = a[i];
		if (Array.isArray(curr)) 
			res = res.concat(flatten(curr));
		else 
			res.push(curr);
	}

	return res;
}
 
const main = () => {
	log(flatten([1, 2, 3, [4, 5] ]))
	log(flatten([[1],[2],[3]]))
	log(flatten([1, [2, [3, 4], [[5]]]]))
	log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
}
 
main();