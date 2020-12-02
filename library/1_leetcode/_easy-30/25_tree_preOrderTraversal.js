const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(1)
const preOrderTraversal = t => {
	const result = [];

	const traverse = tree => {
		if (!tree) return result;

		result.push(tree.val);
		for (let child of tree.children)
			traverse(child)
		
		return result;
	}

	return traverse(t);
}

const preOrderTraversalIterative = t => {
	const stack = [t];
	const result = [];

	if (!t) return result;

	while (stack.length) {
		const node = stack.pop();
		result.push(node.value);
		for (let i = node.children.length - 1; i >= 0; i--)
			stack.push(node.children[i]);
	}

	return result;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(preOrderTraversal(tree))
}

main();