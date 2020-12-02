const { linkedListHelper: utils, log, line } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2e_linkedList');
const { LinkedListNode } = require('../../__common/data_structures/0_node');
 
// 🕑 O(n)
// 🛰 O(1)
const evenOdd = list => {
	utils.start(list);
	if (!list) return;

	let index = 0;
	let curr = list.head;

	// create the two lists
	const evenHead = new LinkedListNode(-1);
	const oddHead = new LinkedListNode(-1);

	// create a tail pointer to iterate
	let evenTail = evenHead;
	let oddTail = oddHead;

	while (curr) {
		// update next and tail pointer
		if (index % 2 === 0) {
			evenTail.next = curr;
			evenTail = curr;
		} else  {
			oddTail.next = curr;
			oddTail = curr;
		}

		curr = curr.next;
		index++;
	}

	// connect
	evenTail.next = oddHead.next;
	oddTail.next = null;

	utils.print('evenHead', evenHead.next);
	return evenHead.next;
}
 
const main = () => {
	evenOdd(arrayToList([1, 2, 3, 4, 5]))
}
 
main();