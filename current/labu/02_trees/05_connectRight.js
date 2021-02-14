const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const connectRight = t => {
	const connectTwoNodes = (a, b) => {
		if (a === null || b === null) return;

		a.next = b;

		connectTwoNodes(a.left, a.right);
		connectTwoNodes(b.left, b.right);
		connectTwoNodes(a.right, b.left);
	}

	if (t === null) return t;
	connectTwoNodes(t.left, t.right);

	return t;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	tree.left.left = new BinarySearchTree(4);
	tree.left.right = new BinarySearchTree(5);

	tree.right.left = new BinarySearchTree(6);
	tree.right.right = new BinarySearchTree(7);

	log(connectRight(tree))
}

main();