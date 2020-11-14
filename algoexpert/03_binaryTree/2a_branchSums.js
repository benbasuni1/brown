const { fh: utils, log, line } = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__common/data_structures/0_node');
 
// 🕑 O(t)
// 🛰 O(n)
const branchSums = t => {
	let res = [];
	fh(t, 0, res);
	return res;
}

let fh = (t, sum = 0, res = []) => {
	if (t === null) return; 

	let currentSum = sum + t.value;
	if (!t.left && !t.right) {
		res.push(currentSum);
		return;
	}

	fh(t.left, currentSum, res);
	fh(t.right, currentSum, res);
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

	tree.left.right.left = new BinaryTreeNode(10);

	log(branchSums(tree))
}
 
main();