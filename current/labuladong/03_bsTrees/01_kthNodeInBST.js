const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line, helper } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const kthNodeInBST = (root, k) => {
	let res = null;

	const helper = node => {
		if (node === null || k < 0) return;

		helper(node.left);
		k--;
		if (k === 0) res = node.value;
		helper(node.right);
	}

	helper(root);
	return res;
}


const main = () => {
	const tree = new BinarySearchTree(3);
	tree.left = new BinarySearchTree(1);
	tree.left.right = new BinarySearchTree(2);

	tree.right = new BinarySearchTree(4);

	log(kthNodeInBST(tree, 1))
}

main();
