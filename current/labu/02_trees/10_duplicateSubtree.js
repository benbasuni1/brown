const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line, helper } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const duplicateSubtree = root => {
	const helper = (root, map, res) => {
		if (root === null) return '#';

		const subtree = `${root.value}.${helper(root.left, map, res)}.${helper(root.right, map, res)}`
		map[subtree] = (map[subtree] || 0) + 1
		if (map[subtree] === 2) res.push(root);

		return subtree;
	}

	let res = [];
	helper(root, {}, res);
	return res;
}


const main = () => {
	const tree = new BinarySearchTree(1);
	tree.left = new BinarySearchTree(2);
	tree.left.left = new BinarySearchTree(4);

	tree.right = new BinarySearchTree(3);
	tree.right.left = new BinarySearchTree(2);
	tree.right.right = new BinarySearchTree(4);
	tree.right.left.left = new BinarySearchTree(4);

	log(duplicateSubtree(tree))
}

main();
