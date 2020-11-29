const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { BinaryTreeNode } = require('../../__common/data_structures/0_node');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(1)
const mergeTrees = (t1, t2) => {
	if (!t1 && !t2) return null;
	let val = (!t1 ? 0 : t1.val) + (!t2 ? 0 : t2.val);

	let newNode = new BinaryTreeNode(val);

	newNode.left = mergeTrees(!t1 ? null : t1.left, !t2 ? null : t2.left);
	newNode.right = mergeTrees(!t1 ? null : t1.right, !t2 ? null : t2.right);

	return newNode;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(mergeTrees(tree))
}

main();