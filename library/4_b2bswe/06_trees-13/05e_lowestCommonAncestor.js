const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(log n)
// 🛰 O(log n)
const lowestCommonAncestor = (t, x, y) => {
	if (x < t.value && y < t.value) 
		return lowestCommonAncestor(t.left, x, y);
	if (x > t.value && y > t.value) 
		return lowestCommonAncestor(t.right, x, y);
	
	return t;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(lowestCommonAncestor(tree, 2, 3))
}

main();