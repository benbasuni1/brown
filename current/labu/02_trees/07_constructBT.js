const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const constructTree = a => {
	if (a.length === 0) return [];
	return build(a, 0, a.length - 1);
}

const build = (a, lo, hi) => {
	if (lo > hi) return null;

	let index = -1;
	let maximum = -Infinity;

	for (let i = lo; i <= hi; i++) {
		if (a[i] > maximum) {
			index = i;
			maximum = a[i];
		}
	}

	let root = new BinarySearchTree(maximum);
	
	root.left = build(a, lo, index - 1);
	root.right = build(a, index + 1, hi);

	return root;
}

const main = () => {
	// const tree = new BinarySearchTree(2);
	// tree.left = new BinarySearchTree(1);
	// tree.right = new BinarySearchTree(3);

	// tree.left.left = new BinarySearchTree(4);
	// tree.left.right = new BinarySearchTree(5);

	// tree.right.left = new BinarySearchTree(6);
	// tree.right.right = new BinarySearchTree(7);

	let a = [3, 2, 1, 6, 0, 5];
	log(constructTree(a))
}

main();