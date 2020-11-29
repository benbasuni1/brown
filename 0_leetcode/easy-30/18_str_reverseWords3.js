const _node = require('../../__common/data_structures/0_node');
const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const reverseWords3 = s => {
	let res = '';
	let word = '';

    for (let char of s) {
        if (char === ' ') {
            res += word + ' ';
            word = '';
        } else word = char + word;
	}

    return res + word;
}
 
const main = () => {
	log(reverseWords3("Let's take LeetCode contest"))
}
 
main();