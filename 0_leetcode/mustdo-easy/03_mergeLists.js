const { linkedListHelper: utils, log } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2e_linkedList');
const { LinkedListNode } = require('../../__common/data_structures/0_node');

// 🕑 O(n)
// 🛰 O(1)
const mergeLists = (list1, list2) => {
	if (!list1) return list2;
	if (!list2) return list1;

	let l1 = list1.head;
	let l2 = list2.head;

	let dummy = new LinkedListNode(-1);
	let curr = dummy;

	while (l1 && l2) {
		if (l1.value <= l2.value) {
			curr.next = l1;
			l1 = l1.next;
		} else {
			curr.next = l2;
			l2 = l2.next;
		}

		curr = curr.next;
	}

	curr.next = !l1 ? l2 : l1;
	utils.print('dummy.next', dummy.next)
	return dummy.next;
}

const main = () => {
	mergeLists(
		arrayToList([1, 5, 3, 1]), 
		arrayToList([3, 8, 2])
	)
}

main()