const { BinarySearchTree } = require('../../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const countUniValues = t => {
	const fh = t => {
		if (!t) return true;

		const left = fh(t.left);
		const right = fh(t.right);

		if (!left || !right) return false;

		if (t.left && t.left.value !== t.value) return false;
		if (t.right && t.right.value !== t.value) return false;

		count++;
		return true;
	}

	let count = 0;
	fh(t)
	return count;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(countUniValues(tree))
}

main();
