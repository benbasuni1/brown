const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const caesarCiphor = (s,  x) => {
	let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
	let str = '';

	for (let letter of s) {
		let intLetter = alphabet.indexOf(letter) + x;
		str += alphabet[intLetter % 26];
	}

	return str;
}

const main = () => {
	log(caesarCiphor("xyz", 2))
}
 
main();