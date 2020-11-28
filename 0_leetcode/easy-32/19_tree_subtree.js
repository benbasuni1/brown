const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(1)
const subTree = (s, t) => {
	if (!s) return false;
	if (isSame(s, t)) return true;

	return subTree(s.left, t) || subTree(s.right, t);
}

const isSame = (s, t) => {
	if (!s && !t) return true;
	if (!s || !t || s.value !== t.value) return false;

	return isSame(s.left, t.left) && isSame(s.right, t.right);
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(subTree(tree))
}

main();