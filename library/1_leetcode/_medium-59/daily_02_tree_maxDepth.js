const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const maxDepths = t => {
	if (!t) return;
	return Math.max(maxDepths(t.left), maxDepths(t.right)) + 1;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(maxDepths(tree))
}

main();