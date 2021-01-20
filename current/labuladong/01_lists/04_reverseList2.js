const Helper = require('../../__common/data_structures/2e_linkedList');
const { linkedListHelper } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const reverseList = list => {
	let pre = null;
	let curr = list.head;
	let next = list.head;

	while (curr !== null) {
		next = curr.next;
		curr.next = pre;

		pre = curr;
		curr = next;
	}

	linkedListHelper.print('pre', pre)
	return pre;
}
	
const main = () => {
	let a = Helper.arrayToList([1, 2, 3])
	reverseList(a);
}

main()