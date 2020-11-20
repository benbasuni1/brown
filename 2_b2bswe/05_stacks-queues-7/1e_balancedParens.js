const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const balancedParens = s => {
	const stack = [];
	const map = {
	  ')': '(',
	  '}': '{',
	  ']': '['
	}

	for (let i = 0; i < s.length; i++) {
		let item = s[i];
		if (map[item]) {
			if (stack.length === 0) return false;
			if (stack.pop() !== map[item]) return false;
		} else stack.push(item);
	}
  
	return stack.length === 0;
}

const main = () => {
	log(balancedParens('()'))
	log(balancedParens('())'))
	log(balancedParens('(([[)))'))
}

main();