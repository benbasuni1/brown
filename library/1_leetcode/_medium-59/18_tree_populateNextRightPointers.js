const { LinkedListNode } = require('../../__common/data_structures/0_node');
const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');

// 🕑 O()
// 🛰 O()
const connect = t => {
	let curr = t;

	while (curr) {
		let s = null;
		let prev = null;
		
		while (curr) {
			if (!s) {
				if (curr.left) s = curr.left
				else if (curr.right) s = curr.right

				prev = s;
			}

			if (prev) {
				if (curr.left && prev !== curr.left)
					prev = prev.next = curr.left;
				
				if (curr.right && prev !== curr.right)
					prev = prev.next = curr.right
			}

			curr = curr.next
		}

		curr = s;
	}

	return t;
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	log(connect(tree))
}

main();