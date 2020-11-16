const { helper: utils, log, line } = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__common/data_structures/0_node');
 
// 🕑 O()
// 🛰 O()
const binaryTreeRightView = t => {
	const fh = (t, currDepth = 0) => {
		if (!t) return;
		if (currDepth === result.length) result.push(t.value);

		fh(t.right, currDepth+1);
		fh(t.left, currDepth+1);
	}

	let result = [];
	fh(t);
	return result;
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
	log(binaryTreeRightView(tree))
}
 
main();