const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const minDepthOfBST = t => {
	let arr = [t];
	let min = Infinity;
	let depth = 1;

	while (arr.length) {
		let curr = arr.shift();

		if (!curr.left && !curr.right) {
			if (depth < min) min = depth;
		}

		if (curr.left) arr.push(curr.left);
		if (curr.right) arr.push(curr.right);

		depth++;
	}

	return min;
}
 
const main = () => {
	let tree = new BinarySearchTree(3)

	tree.left = new BinarySearchTree(9);
	tree.right = new BinarySearchTree(20);

	tree.right.left = new BinarySearchTree(15);
	tree.right.right = new BinarySearchTree(7);
	
	log(minDepthOfBST(tree))
}
 
main();