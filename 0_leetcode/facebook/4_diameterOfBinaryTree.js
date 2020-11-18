const { helper: utils, log, line } = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__common/data_structures/0_node');
 
// 🕑 O()
// 🛰 O()
const diameterOfBinaryTree = t => {
	const fh = t => {
		if (!t) return 0;

		const left = fh(t.left);
		const right = fh(t.right);

		diameter = Math.max(diameter, left + right);
		return 1 + Math.max(left,  right);
	}

	let diameter = 0;
	fh(t);
	return diameter;
}

 
const main = () => {
	let tree = new BinaryTreeNode(1);

	tree.left = new BinaryTreeNode(2);
	tree.right = new BinaryTreeNode(3);

	tree.left.left = new BinaryTreeNode(4);
	tree.left.right = new BinaryTreeNode(5);

	log(diameterOfBinaryTree(tree))
}
 
main();