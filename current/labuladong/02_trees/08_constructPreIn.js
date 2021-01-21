const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const constructTreePreIn = (preOrder, inOrder) => {
	const helper = (lo, hi) => {
		if (lo > hi) return null;

		let index = -1;
		let val = preOrder.shift();
		let root = new BinarySearchTree(val);

		for (let i = lo; i <= hi; i++) 
			if (inOrder[i] === val) index = i;

		root.left = helper(lo, index - 1);
		root.right = helper(index + 1, hi);

		return root;
	}

	return helper(0, inOrder.length - 1);
}

const main = () => {
	let preOrder  = [3, 9, 20, 15, 7];
	let inOrder   = [9, 3, 15, 20, 7];
	// let postOrder = [9, 15, 7, 20, 3];
	log(constructTreePreIn(preOrder, inOrder))
}

main();

/*
	3
  /   \
 9	  20
	 /  \
	15   7	
*/