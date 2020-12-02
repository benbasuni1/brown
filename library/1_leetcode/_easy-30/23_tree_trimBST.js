const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(1)
const trimBST = (root, low, high) => {
	if (!root) return null;

	if (root.value < low) return trimBST(root.right, low, high);
	if (root.value > high) return trimBST(root.left, low, high);

	root.left = trimBST(root.left, low, high);
	root.right = trimBST(root.right, low, high);

	return root;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(trimBST(tree))
}

main();