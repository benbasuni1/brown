const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(1)
const sumRootToLeafPaths = (t, k) => {
	if (!t) return false;

	const isLeaf = !t.left && !t.right;
	if (isLeaf && k - t.value === 0) return true;

	return sumRootToLeafPaths(t.left, k - t.value) ||
	sumRootToLeafPaths(t.right, k - t.value)
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(sumRootToLeafPaths(tree, 5))
}

main();