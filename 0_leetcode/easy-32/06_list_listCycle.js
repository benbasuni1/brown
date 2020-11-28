const { linkedListHelper: utils, log } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2e_linkedList');
const { LinkedListNode } = require('../../__common/data_structures/0_node');

// 🕑 O(n)
// 🛰 O(1)
const listCycle = list => {
	let slow = list.head;
	let fast = list.head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) return true;
	}

	return false;
}

const main = () => {
	log(listCycle(arrayToList([1, 2, 3, 4, 5], true)))
	log(listCycle(arrayToList([1, 2, 3, 4, 5])))
}

main()