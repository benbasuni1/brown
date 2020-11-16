const { helper: utils, log, line } = require('../../__common/utils');
const { BinarySearchTree } = require('../../__common/data_structures/8_binarySearchTree');
 
// 🕑 O(log n)
// 🛰 O(n)
const minHeightBST = a => {
	const fh = a => {
		if (!a.length) return;
		let m = Math.floor((a.length - 1) / 2);
		let val = a[m];

		if (!bst) bst = new BinarySearchTree(val);
		else bst.insert(val);

		fh(a.slice(0, m));
		fh(a.slice(m + 1, a.length));
	}

	let bst = null;
	fh(a)
	return bst;
}


 
const main = () => {
	log(minHeightBST([1, 2, 5, 7, 10, 13, 14, 15, 22]))
	// log(minHeightBST([1]))
	// log(minHeightBST([1, 2]))
}
 
main();