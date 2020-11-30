const { BinaryTreeNode } = require('../../__common/data_structures/0_node');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(1)
const inveryBinaryTree = t => {
	if (!t) return t;

	swap(t); 
	inveryBinaryTree(t.left);
	inveryBinaryTree(t.right);

	return t;
}

const swap = t => {
	const right = t.right;
	t.right = t.left;
	t.left = right;
}

const dfsInvert = t => {
	const stack = [t];

	while (stack.length) {
		const n = stack.pop();
		if (n) {
			[n.left, n.right] = [n.right, n.left];
			stack.push(n.left, n.right);
		}
	}

	return t;
}

const bfsInvert = t => {
	const queue = [t];

	while (queue.length) {
		const n = queue.shift();
		if (n) {
			[n.left, n.right] = [n.right, n.left];
			queue.push(n.left, n.right);
		}
	}

	return t;
}

const main = () => {
	let tree = new BinaryTreeNode(1);

	tree.left = new BinaryTreeNode(2);
	tree.right = new BinaryTreeNode(3);

	tree.left.left = new BinaryTreeNode(4);
	tree.left.right = new BinaryTreeNode(5);

	tree.right.left = new BinaryTreeNode(6);
	tree.right.right = new BinaryTreeNode(7);

	tree.left.left.left = new BinaryTreeNode(8);
	tree.left.left.right = new BinaryTreeNode(9);

	log(inveryBinaryTree(tree))
	log(dfsInvert(tree))
	log(bfsInvert(tree))
}

main();