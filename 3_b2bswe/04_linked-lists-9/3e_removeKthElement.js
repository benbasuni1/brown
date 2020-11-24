const { linkedListHelper: utils, log } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2e_linkedList');
const { LinkedListNode } = require('../../__common/data_structures/0_node');

// 🕑 O(n)
// 🛰 O(1)
const removeKthElement = (list, k) => {
	// create a dummy clone 
	const dummy = new LinkedListNode(-1);
	dummy.next = list.head;

	// right iterate k times 
	let right = dummy.next;
	while (k > 0) {
		right = right.next;
		k--;
	}

	// left iterate until right is finished
	let left = dummy;
	while (right) {
		left = left.next;
		right = right.next;
	}

	// skip middle 
	left.next = left.next.next;

	return dummy.next;
}

const main = () => {
	removeKthElement(arrayToList([1, 2, 3, 4, 5]), 3)
}

main()