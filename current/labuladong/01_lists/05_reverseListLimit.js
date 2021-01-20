const Helper = require('../../__common/data_structures/2e_linkedList');
const { linkedListHelper } = require('../../__common/utils');

// 🕑 O(n)
// 🛰 O(n)
const reverseListLimit = (list, k) => {
	const helper = (head, k) => {
		const reverse = (a, b) => {
			let pre = null;
			let curr = a;
			let next = a;

			while (curr !== b) {
				next = curr.next;
				curr.next = pre;

				pre = curr;
				curr = next;
			}

			return pre;
		}

		if (head === null) return null;
		let a = head;
		let b = head;
		
		for (let i = 0; i < k; i++) {
			if (b === null) return head;
			b = b.next;
		}

		let newHead = reverse(a, b);
		a.next = helper(b, k);

		linkedListHelper.print('newHead', newHead);
		return newHead;
	}

	helper(list.head, k);

}
	
const main = () => {
	let a = Helper.arrayToList([1, 2, 3, 4, 5])
	reverseListLimit(a, 2);
}

main()