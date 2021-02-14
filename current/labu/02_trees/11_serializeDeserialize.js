const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line, helper } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const serialize = root => {
	let data = [];

	const helper = node => {
		if (node === null) {
			data.push(null); 
			return;
		}

		data.push(node.value);
		helper(node.left);
		helper(node.right);
	}

	helper(root);
	return data;
}

// 🕑 O(n)
// 🛰 O(n)
const deserialize = data => {
	const helper = () => {
		if (data.length === 0) return;

		const val = data.shift();
		if (val === null) return null;

		const node = new BinarySearchTree(val);
		node.left = helper();
		node.right = helper();
		
		return node;
	}

	return helper();
}


const main = () => {
	const tree = new BinarySearchTree(1);
	tree.left = new BinarySearchTree(2);
	tree.left.left = new BinarySearchTree(4);

	tree.right = new BinarySearchTree(3);
	tree.right.left = new BinarySearchTree(2);
	tree.right.right = new BinarySearchTree(4);
	tree.right.left.left = new BinarySearchTree(4);

	log(deserialize(serialize((tree))));
}

main();

