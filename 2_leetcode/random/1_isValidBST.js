const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const isValidBST = t => {
	const fh = (t, minVal = -Infinity, maxVal = Infinity) => {
		if (!t) return true;
		if (t.value < minVal || t.value >= maxVal) return false;
		return fh(t.left, minVal, t.value) && fh(t.right, t.value, maxVal);
	}

	return fh(t);
}

const main = () => {
	const tree = new BinarySearchTree(2);
	tree.left = new BinarySearchTree(1);
	tree.right = new BinarySearchTree(3);

	const tree2 = new BinarySearchTree(5);

	tree2.left = new BinarySearchTree(1);
	tree2.right = new BinarySearchTree(4);

	tree2.right.left = new BinarySearchTree(3);
	tree2.right.right = new BinarySearchTree(6);

	log(isValidBST(tree))
	log(isValidBST(tree2))

	const tree3 = new BinarySearchTree(10);
	
	tree3.left = new BinarySearchTree(5);
	tree3.right = new BinarySearchTree(15);

	tree3.right.right = new BinarySearchTree(22);

	tree3.left.left = new BinarySearchTree(2)
	tree3.left.right = new BinarySearchTree(5)

	tree3.left.right.right = new BinarySearchTree(11)

	tree3.left.left.left = new BinarySearchTree(1)

	// {"id": "10", "left": "5", "right": "15", "valueue": 10},
	// {"id": "15", "left": null, "right": "22", "valueue": 15},
	// {"id": "22", "left": null, "right": null, "valueue": 22},
	// {"id": "5", "left": "2", "right": "5-2", "valueue": 5},
	// {"id": "5-2", "left": null, "right": "11", "valueue": 5},

	// {"id": "11", "left": null, "right": null, "valueue": 11},
	// {"id": "2", "left": "1", "right": null, "valueue": 2},
	// {"id": "1", "left": null, "right": null, "valueue": 1}

	log(isValidBST(tree3))
}
 
main();