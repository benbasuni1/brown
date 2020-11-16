const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
const { binarySearchTreeHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const isValidBST = t => {
	let flag = true;
  
	let fh = t => {
	  if (!t) return flag;
	  if (t.left && t.left.value > t.value || 
		  t.right && t.right.value < t.value) {
		  flag = false;
		  return;
	  }

	  fh(t.left);
	  fh(t.right);
	}
	
	fh(t);
	return flag;
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
}
 
main();