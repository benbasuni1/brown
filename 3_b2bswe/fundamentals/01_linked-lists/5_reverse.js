const { helper: utils, log, line } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2_linkedList');
 
// 🕑 O(n)
// 🛰 O(1)
const reverse = l => {
	let curr = l.head;
	let prev = null;

	while (curr) {
		let temp = curr.next;

		curr.next = prev;
		prev = curr;
		curr = temp;
	}

	return prev; 
}

const reverseR = l => {
	const fh = node => {
		if (!node || !node.next) return node;
		
		let reversed = fh(node.next);

		let right = node.next;
		right.next  = node;
		node.next = null;
		
		return reversed;
	}

	return fh(l.head);
}
 
const main = () => {
	log(reverse(arrayToList([1,2,3,4,5,6,7])))
	log(reverseR(arrayToList([1,2,3,4,5,6,7])))
}
 
main();