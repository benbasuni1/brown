const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const constructTree = (a1, a2) => {
	let map = {};
	for (let i = 0; i < a1.length; i++) map[a1[i]] = i; 
	
	let recur = (s, e) => {
		if (s > e) return null;

		let val = a2.pop();
		let t = new TreeNode(val);

		t.right = recur(map[val] + 1, e);
		t.left = recur(s, map[val] - 1);

		return root;
	}
	
	return recur(0, a1.length - 1);  
}
 
const main = () => {
	log(constructTree())
}
 
main();