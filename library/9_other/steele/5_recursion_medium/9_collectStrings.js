const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const collectStrings = a => {

	let helper = (a, res = []) => {
		for (let key in a) {
			let curr = a[key];
			if (typeof(curr) === 'string') res.push(curr);
			if (typeof(curr) === 'object' && !Array.isArray(curr)) 
				helper(curr, res);
		}

		return res;
	}

	return helper(a);
}
 
const main = () => {
	const obj = {
		stuff: "foo",
		data: {
			val: {
				thing: {
					info: "bar",
					moreInfo: {
						evenMoreInfo: {
							weMadeIt: "baz"
						}
					}
				}
			}
		}
	}
	
	log(collectStrings(obj)) // ["foo", "bar", "baz"])
}
 
main();