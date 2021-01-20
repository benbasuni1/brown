const Helper = require('../../__common/data_structures/2e_linkedList');
const { linkedListHelper } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const reverseNList = (list, n) => {
	let successor = null;
	const recurse = (head, n) => {
		if (n === 1) {
			successor = head.next;
			return head;
		}

		let last = recurse(head.next, n - 1);
		head.next.next = head;
		head.next = successor;

		linkedListHelper.print('list', last)
		return last;
	}

	recurse(list.head, n);
}
	
const main = () => {
	let a = Helper.arrayToList([1, 2, 3, 4])
	reverseNList(a, 3);
}

main()