const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const isomorphicStrings = (s, t) => {
	if (s.length !== t.length) return false;

	let map = {};

    for (let i = 0; i < s.length; i++){
        if(!map['1' + s[i]]) map['1' + s[i]] = t[i];
        if(!map['2' + t[i]]) map['2' + t[i]] = s[i];
        if(t[i] != map['1' + s[i]] || s[i] != map['2' + t[i]]) return false;
	}

	return true;
}
 
const main = () => {
	log(isomorphicStrings('egg', 'add'))
}
 
main();