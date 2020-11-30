const { linkedListHelper: utils, log } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2e_linkedList');
const { LinkedListNode } = require('../../__common/data_structures/0_node');

// 🕑 O(n)
// 🛰 O(1)
const swapPairs = list => {
	let dummy = new LinkedListNode(-1);
	dummy.next = list.head;

	let prev = dummy;
	let curr = dummy.next;

	while (curr.next) {
		swap(prev, curr, curr.next)
		prev = curr
		curr = curr.next;
	}

	utils.print('dummy.next', dummy.next)

	return dummy.next;
}

const swap = (prev, curr, p1) => {
	prev.next = p1;
	curr.next = p1.next;
	p1.next = curr;
}

const main = () => {
	swapPairs(arrayToList([1, 2, 3, 4, 5]))
}

main()