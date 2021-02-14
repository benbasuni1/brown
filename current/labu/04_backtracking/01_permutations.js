const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n!)
// 🛰 O(1)
const permutations = a => {
	let result = [];

	const backtrack = (path, selection) => {
		if (path.length === a.length) {
			result.push(path);
			return;
		}

		for (let i = 0; i < selection.length; i++) {
			path.push(selection[i])
			backtrack(path.slice(), selection.slice(0, i).concat(selection.slice(i + 1)));
			path.pop();
		}
	}

	backtrack([], a);
	return result;
}
 
const main = () => {
	log(permutations([1, 2, 3]))
}
 
main();