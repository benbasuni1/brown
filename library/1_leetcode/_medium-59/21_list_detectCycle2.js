const { linkedListHelper: utils, log } = require('./__common/utils');
const { arrayToList } = require('./__common/data_structures/2e_linkedList');
const { LinkedListNode } = require('./__common/data_structures/0_node');

// 🕑 O(n)
// 🛰 O(1)
const detectCycle2 = list => {
	let slow = list.head;
	let fast = list.head;

	if (!slow) return null;

	while (fast.next) {
		fast = fast.next;
		if (fast.next) {
			slow = slow.next;
			fast = fast.next;
			if (slow === fast) {
				slow = list.head;
				while (slow !== fast) {
					slow = slow.next;
					fast = fast.next;
				}

				return slow;
			}
		}
	}

	return null;
}

const main = () => {
	log(detectCycle2(arrayToList([1, 2, 3, 4, 5], true)))
}

main()