const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const isSubsequence = (a, b) => {
	let i = 0;
	let j = 0;

	while (i < a.length && j < b.length) {
		if (a[i] === b[j]) i++;
		j++;
	}

	return i === a.length;
}
 
const main = () => {
	log(isSubsequence('hello', 'hello world'));
	log(isSubsequence('sing', 'sting'));
	log(isSubsequence('abc', 'abracadabra'));
	log(isSubsequence('abc', 'acb'));
}
 
main();