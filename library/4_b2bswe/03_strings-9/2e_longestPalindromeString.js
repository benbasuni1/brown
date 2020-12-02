const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const longestPalindromeString = s => {
	utils.start(s);
	let map = {};
	let count = 0;
	
	for (let letter of s) {
		let letter = s[i];

		// add or del letter. inc+1 if deleted
		if (!map[letter]) map[letter] = 1;
		else {
			delete map[letter];
			count++;
		}
	}
	
	return Object.keys(map).length ? (count * 2) + 1 : count;
}
 
const main = () => {
	// log(longestPalindromeString("aabbc"))
	log(longestPalindromeString("aabdbcc"))
	// log(longestPalindromeString("aA"))
	// log(longestPalindromeString("xyz"))
	// log(longestPalindromeString("ccc"))
	// log(longestPalindromeString("abcbacbbZ"))
}
 
main();