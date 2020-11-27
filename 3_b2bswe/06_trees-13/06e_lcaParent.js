const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const lcaWithParent = (t, n1, n2) => {
	let ancestors = {};

	while (n1) {
		ancestors[n1] = true;
		n1 = n1.parent;
	}

	while (n2) {
		if (ancestors[n2]) return n2;
		n2 = n2.parent;
	}

	return false;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(lcaWithParent(tree))
}

main();