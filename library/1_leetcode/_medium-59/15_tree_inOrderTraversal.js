const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const inOrderTraversal = t => {
	const fh = t => {
		if (!t) return;

		fh(t.left);
		res.push(t.value);
		fh(t.right);
	}

	const res = [];
	fh(t);
	return res;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(inOrderTraversal(tree))
}

main();