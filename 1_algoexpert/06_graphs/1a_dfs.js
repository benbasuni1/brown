const { helper: utils, log, line } = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__common/data_structures/0_node');
 
// 🕑 O(n)
// 🛰 O(n)
const depthFirstSearch = g => {
	let arr = [g];
	let res = [];

	while (arr.length) {
		let curr = arr.shift();
		res.push(curr.value);

		if (curr.right) arr.unshift(curr.right);
		if (curr.left) arr.unshift(curr.left);
	}

	return res;
}

const main = () => {
	let graph = new BinaryTreeNode(1);

	graph.left = new BinaryTreeNode(2);
	graph.right = new BinaryTreeNode(3);

	graph.left.left = new BinaryTreeNode(4);
	graph.left.right = new BinaryTreeNode(5);

	graph.right.left = new BinaryTreeNode(6);
	graph.right.right = new BinaryTreeNode(7);

	graph.left.left.left = new BinaryTreeNode(8);
	graph.left.left.right = new BinaryTreeNode(9);
	log(depthFirstSearch(graph));

}
 
main();