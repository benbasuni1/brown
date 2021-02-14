const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line, helper } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const bstToGst = root => {
	let sum = 0;
	const helper = node => {
		if (node === null) return;
		helper(node.right);
		node.value += sum;
		sum = node.value;
		helper(node.left);
	}

	helper(root);
	return root;
}


const main = () => {
	const tree = new BinarySearchTree(3);
	tree.left = new BinarySearchTree(2);
	tree.right = new BinarySearchTree(4);
	tree.right.left = new BinarySearchTree(1);

	log(bstToGst(tree))
}

main();
