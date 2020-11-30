const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const longestPalindromicString = s => {
	let res = '';

	for (let i = 0; i < s.length; i++) {
		let item1 = fh(s, i, i);
		let item2 = fh(s, i , i + 1);
		let longerItem = 
			item1.length > item2.length ? item1 : item2;
		
		if (longerItem.length > res.length)
			res = longerItem;
	}

	return res;
}

const fh = (s, i, j) => {
	while (i >= 0 && j < s.length && s[i] === s[j]) {
		i--; j++;
	}

	return s.slice(i + 1, j);
}
 
const main = () => {
	log(longestPalindromicString("cbbd"))
	log(longestPalindromicString("babad"))
}
 
main();
