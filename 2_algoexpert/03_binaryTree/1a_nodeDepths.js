const { helper: utils, log, line } = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__common/data_structures/0_node');
 
// 🕑 O(t)
// 🛰 O(n)
const nodeDepths = t => {
	return helper(t, 0);
}

let helper = (t, d) => {
	if (t === null) return 0;
	console.log('t, d', t.value, d)
	return d + helper(t.left, d + 1) + helper(t.right, d + 1);
}
 
const main = () => {
	let tree = new BinaryTreeNode(1);

	tree.left = new BinaryTreeNode(2);
	tree.right = new BinaryTreeNode(3);

	tree.left.left = new BinaryTreeNode(4);
	tree.left.right = new BinaryTreeNode(5);

	tree.right.left = new BinaryTreeNode(6);
	tree.right.right = new BinaryTreeNode(7);

	tree.left.left.left = new BinaryTreeNode(8);
	tree.left.left.right = new BinaryTreeNode(9);

	log(nodeDepths(tree))
}
 
main();