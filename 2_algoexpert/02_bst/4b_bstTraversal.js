const { helper: utils, log, line } = require('../../__common/utils');
const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
 
// 🕑 O()
// 🛰 O()

const preOrder = t => {
	const fh = t => {
		if (!t) return;

		result.push(t.value);
		fh(t.left);
		fh(t.right);
	}

	let result = [];
	fh(t);
	return result;
}

const inOrder = t => {
	const fh = t => {
		if (!t) return;

		fh(t.left);
		result.push(t.value);
		fh(t.right);
	}

	let result = [];
	fh(t);
	return result;
}

const postOrder = t => {
	const fh = t => {
		if (!t) return;

		fh(t.left);
		fh(t.right);
		result.push(t.value);
	}

	let result = [];
	fh(t);
	return result;
}

const regularOrder = t => {
	let arr = [t];
	let result = [];

	while (arr.length) {
		let curr = arr.shift();
		if (curr.left) arr.push(curr.left);
		if (curr.right) arr.push(curr.right);
		result.push(curr.value);
	}

	return result;
}
 
const main = () => {
	const tree = new BinarySearchTree(1);

	tree.left = new BinarySearchTree(2);
	tree.right = new BinarySearchTree(3);

	tree.left.left = new BinarySearchTree(4)
	tree.left.right = new BinarySearchTree(5)

	tree.right.left = new BinarySearchTree(6);
	tree.right.right = new BinarySearchTree(7);

	log(preOrder(tree))
	log(inOrder(tree))
	log(postOrder(tree))
	log(regularOrder(tree))
}
 
main();