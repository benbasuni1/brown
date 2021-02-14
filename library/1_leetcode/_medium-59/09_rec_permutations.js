const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n!)
// 🛰 O(1)
const permutations = a => {
	const fh = (a, n=0) => {
		if (n === a.length - 1) {
			res.push(a.slice(0));
			return;
		}

		for (let i = n; i < a.length; i++) {
			[a[i], a[n]] = [a[n], a[i]]
			fh(a, n + 1);
			[a[i], a[n]] = [a[n], a[i]]
		}
	}

	let res = [];
	fh(a)
	return res;
}

const permutations2 = a => {
	let results = [];
	
	let permutations = (path, selection) => {
		if(!selection.length) {
			results.push(path);
			return;
		}

		for(let i = 0; i < selection.length; i++) {
			path.push(selection[i]); 
			permutations(path.slice(), selection.slice(0, i).concat(selection.slice(i+1))); 
			path.pop(); 
		}
	};
	
	permutations([], a);
	return results;
}
 
const main = () => {
	// log(permutations([1, 2, 3]))
	log(permutations2([1, 2, 3]))
}
 
main();