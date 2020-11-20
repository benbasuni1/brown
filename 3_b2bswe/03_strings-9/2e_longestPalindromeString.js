const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const longestPalindromeString = s => {
	let map = {};
	let count = 0;
	
	for (let i = 0; i < s.length; i++) {
		let letter = s[i];

		if (!map[letter]) map[letter] = 1;
		else {
			delete map[letter];
			count++;
		}
	}

	return Object.keys(map).length ? (count * 2) + 1 : str.length * 2;
}
 
const main = () => {
	log(longestPalindromeString("aabbc"))
	log(longestPalindromeString("abbcccd"))
	log(longestPalindromeString("aA"))
	log(longestPalindromeString("xyz"))
	log(longestPalindromeString("ccc"))
	log(longestPalindromeString("abcbacbbZ"))
}
 
main();