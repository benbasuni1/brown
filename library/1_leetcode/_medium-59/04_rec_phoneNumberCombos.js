const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const phoneNumbers = s => {
	const fh = (i, str) => {
		if (i === s.length) {
			res.push(str); 
			return;
		}

		for (const c of map[s[i]]) 
			fh(i + 1, str + c);
	}

	if (!s) return;
	let res = [];
	fh(0, '');
	return res;
}

 
const map = {
	0: "",
	1: "",
	2: "abc",
	3: "def",
	4: "ghi",
	5: "jkl",
	6: "mno",
	7: "pqrs",
	8: "tuv",
	9: "wxyz",
}

const main = () => {
	log(phoneNumbers("23"))
}
 
main();