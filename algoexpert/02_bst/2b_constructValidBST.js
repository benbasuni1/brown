const { BinaryTreeNode } = require('../../__common/data_structures/0_node');
const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

const main = () => {
	// let tree = new BST(10);

	// tree.left = new BST(5);
	// tree.right = new BST(15);

	// tree.left.left = new BST(2);
	// tree.left.right = new BST(5);

	// tree.left.left.left = new BST(1);

	// tree.right.left = new BST(13);
	// tree.right.right = new BST(22);

	// tree.right.left.right = new BST(14);

	// let bst = new BST(tree);

	// bst.insert(3);

	// console.log('bst', bst)

	let bst = new BinarySearchTree(10);
	bst.insert(5);
	bst.insert(15);
	bst.insert(2);
	bst.insert(5);
	bst.insert(13);
	bst.insert(22);
	bst.insert(1);
	bst.insert(14);
	bst.insert(12);
	// bst.remove(10);

	// treeToArrDFS(bt);
	utils.treeToArrBFS(bst);
	bst.remove(10);
	utils.treeToArrBFS(bst);
	// log(bst.contains(8))
	// log(bst.contains(1))
}
 
main();