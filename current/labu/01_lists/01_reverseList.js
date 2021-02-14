const Helper = require('../../__common/data_structures/2e_linkedList');
const { linkedListHelper } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const reverseList = list => {
	if (head.next === null || head === null) return head;
	let last = recurse(head.next);

	head.next.next = head;
	head.next = null;

	linkedListHelper.print('list', last);
	return last;
}
	
const main = () => {
	let a = Helper.arrayToList([1, 2, 3])
	reverseList(a);
}

main()