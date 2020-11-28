const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const validParens = s => {
	let parens = {
		")": "(",
		"}": "{",
		"]": "[",
	}

	let stack = [];

	for (let letter of s) {
		if (parens[letter]) {
			if (stack.length === 0) return false;
			if (stack.pop() !== parens[letter]) return false;
		} else stack.push(letter);
	}

	return stack.length ? false : true;
}
 
const main = () => {
	log(validParens("()[]{}"))
	log(validParens("(]"))
}
 
main();