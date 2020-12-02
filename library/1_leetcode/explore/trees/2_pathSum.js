const { BinarySearchTree } = require('../../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const pathSum = (t, k) => {
	if (!t && k !== 0) return false;
	
	const fh = (t, sum=0) => {
		if (!t.left && !t.right) return sum === t.value;
		else return fh(t.left, sum - t.value) || fh(t.right, sum - t.value)
	}

	return fh(t)
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(pathSum(tree, 3))
}

main();