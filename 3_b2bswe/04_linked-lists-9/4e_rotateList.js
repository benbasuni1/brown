const { linkedListHelper: utils, log } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2e_linkedList');
const { LinkedListNode } = require('../../__common/data_structures/0_node');

// 🕑 O(n)
// 🛰 O(1)
const rightRotate = (list, k) => {
	if (!list) return list;
	let size = 1;
	let tail = list.head;

	while (tail.next) {
		tail = tail.next;
		size++;
	}

	k %= size;
	if (k === 0) {
		utils.print('list.head', list.head)
		return list.head;
	}

	tail.next = list.head;

	let newTail = list.head;
	while (k - 1 > 0) {
		newTail = newTail.next;
		k--;
	}

	let temp = newTail.next;
	newTail.next = null;

	utils.print('temp', temp)
	return temp;
}

const main = () => {
	// rightRotate(arrayToList([1, 2, 3, 4, 5]), 3)
	// rightRotate(arrayToList([4, 1, 6, 7]), 4)
	rightRotate(arrayToList([1,2,3,4]), 2)
}

main()