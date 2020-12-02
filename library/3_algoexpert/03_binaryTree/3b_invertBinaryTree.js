const { helper: utils, log, line } = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__common/data_structures/0_node');
 
// 🕑 O(n)
// 🛰 O(n)
const invertBinaryTree = t => {
	if (!t) return;
	invertBinaryTree(t.left);
	invertBinaryTree(t.right);

	swapLR(t);
	return t;
}

const swapLR = t => {
	const left = t.left;
	t.left = t.right;
	t.right = left;
}
 
const main = () => {
	let tree = new BinaryTreeNode(1);

	tree.left = new BinaryTreeNode(2);
	tree.right = new BinaryTreeNode(3);

	tree.left.left = new BinaryTreeNode(4);
	tree.left.right = new BinaryTreeNode(5);

	// tree.right.left = new BinaryTreeNode(6);
	// tree.right.right = new BinaryTreeNode(7);

	// tree.left.left.left = new BinaryTreeNode(8);
	// tree.left.left.right = new BinaryTreeNode(9);
	log(invertBinaryTree(tree))
}
 
main();