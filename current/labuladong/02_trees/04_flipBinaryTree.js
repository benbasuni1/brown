const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const flipBinaryTree = t => {
	if (t === null) return null;

	let temp = t.left;
	t.left = t.right;
	t.right = temp;

	flipBinaryTree(t.left);
	flipBinaryTree(t.right);

	return t;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(flipBinaryTree(tree))
}

main();