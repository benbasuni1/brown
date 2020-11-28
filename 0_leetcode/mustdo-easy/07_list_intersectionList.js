const { linkedListHelper: utils, log } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2e_linkedList');
const { LinkedListNode } = require('../../__common/data_structures/0_node');

// 🕑 O(n)
// 🛰 O(1)
const intersectionList = (list1, list2) => {
	if (!list1 || !list2) return null;

	let headA = list1.head;
	let headB = list2.head;

	let l1 = list1.head;
	let l2 = list2.head;

	while (l1 !== l2) {
		l1 = l1 ? l1.next : headB;
		l2 = l2 ? l2.next : headA;
	}

	return l1;
}

const main = () => {
	intersectionList(arrayToList([1, 2, 3, 4, 5]))
}

main()