const { List, Helper } = require('./implementation');

// 🕑 O(n)
// 🛰 O(1)
const swapKthNode = (list, k) => {
	let curr = list;
	let prev = null;

	while (k) {
		prev = curr;
		curr = curr.next;
		k--;
	}

	if (k > 0) return null;

	let a = swap(list, prev, curr);
	Helper.display(a);
	return 
}

const swap = (list, prev, curr) => {
	prev.next = list;
	let temp = list.next;
	list.next = curr.next;
	curr.next = temp;

	return curr;
}
	
const main = () => {
	let a = Helper.createLinkedList([1, 2, 3, 4, 56])
	swapKthNode(a, 3);
}

main()