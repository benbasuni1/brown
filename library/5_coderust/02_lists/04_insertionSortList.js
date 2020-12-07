const { List, Helper } = require('./implementation');

// 🕑 O(n)
// 🛰 O(1)
const insertionSort = list => {
	let unsorted = null;
	let curr = list;

	while (curr) {
		let temp = curr.next;
		unsorted = helper(unsorted, curr);
		curr = temp;
	}

	Helper.display(unsorted);
	return unsorted;
}

const helper = (head, node) => {
	if (!node) return list;

	// head
	if (!head || node.data <= head.data) {
		node.next = head;
		return node;
	}

	// mid
	let curr = head;

	while (curr.next && curr.next.data < node.data) {
		curr = curr.next;
	}

	node.next = curr.next;
	curr.next = node;

	return head;
}

const main = () => {
	let a = Helper.createLinkedList([2,  7, 1, 42, 6, 23, 14])
	insertionSort(a);
}

main()