const Helper = require('../../__common/data_structures/2e_linkedList');
const { linkedListHelper } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const reverseMNList = (list, m, n) => {
	const recurse = (head, m, n) => {
		let successor = null;

		const reverseN = (head, n) => {
			if (n === 1) {
				successor = head.next;
				return head;
			}

			let last = reverseN(head.next, n - 1);
			head.next.next = head;
			head.next = successor;	

			return last;
		}

		if (m === 1) return reverseN(head, n);
		head.next = recurse(head.next, m - 1, n - 1)

		linkedListHelper.print('head', head);
		return head;
	}

	recurse(list.head, m, n);
}

const main = () => {
	let a = Helper.arrayToList([1, 2, 3, 4, 5])
	reverseMNList(a, 2, 4);
}

main()