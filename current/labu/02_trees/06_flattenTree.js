const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const flattenTree = t => {
	if (t === null) return t;

	flattenTree(t.left);
	flattenTree(t.right);

	let left = t.left;
	let right = t.right;

	t.left = null;
	t.right = left;

	let p = t;
	while (p.right !== null) p = p.right;
	p.right = right;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	tree.left.left = new BinarySearchTree(4);
	tree.left.right = new BinarySearchTree(5);

	tree.right.left = new BinarySearchTree(6);
	tree.right.right = new BinarySearchTree(7);

	log(flattenTree(tree))
}

main();