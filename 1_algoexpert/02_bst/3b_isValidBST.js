const { helper: utils, log, line } = require('../../__common/utils');
const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
 
// 🕑 O(n)
// 🛰 O(n)
const isValidBST = t => {
	const fh = (t, min = -Infinity, max = Infinity) => {
		if (!t) return true;
		if (t.value < min || t.value >= max) return false;
		return fh(t.left, min, t.value) && fh(t.right, t.value, max);
	}

	return fh(t);
}
 
const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	const tree2 = new BinarySearchTree(5);

	tree2.left = new BinarySearchTree(1);
	tree2.right = new BinarySearchTree(4);

	tree2.right.left = new BinarySearchTree(3);
	tree2.right.right = new BinarySearchTree(6);

	const tree3 = new BinarySearchTree(10);
	
	tree3.left = new BinarySearchTree(5);
	tree3.right = new BinarySearchTree(15);

	tree3.right.right = new BinarySearchTree(22);

	tree3.left.left = new BinarySearchTree(2)
	tree3.left.right = new BinarySearchTree(5)

	tree3.left.right.right = new BinarySearchTree(11)

	tree3.left.left.left = new BinarySearchTree(1)

	log(isValidBST(tree))
	log(isValidBST(tree2))
	log(isValidBST(tree3))
}
 
main();