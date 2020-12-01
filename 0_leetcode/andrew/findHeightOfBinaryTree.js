const { helper: utils, log, line } = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__common/data_structures/0_node');
 
// 🕑 O(t)
// 🛰 O(n)
const findMaxHeight = t => {
	if (!t) return -1;
	return 1 + Math.max(nodeDepths(t.left), nodeDepths(t.right));
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

	log(findMaxHeight(tree))
}
 
main();