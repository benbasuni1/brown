const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const levelOrderTraversal = t => {
	let que = [t];
	let res = [];

	if (!t) return res;
	
	while (que.length) {
		let qLen = que.length;
		let levels = [];

		for (let i = 0; i < qLen; i++) {
			let node = que.shift();
			if (node.left) que.push(node.left);
			if (node.right) que.push(node.right);
			levels.push(node.value);
		}

		res.push(levels);
	}

	return res;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(levelOrderTraversal(tree))
}

main();