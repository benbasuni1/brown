const { List, Helper } = require('./implementation');

// 🕑 O(n)
// 🛰 O(1)
const deleteKthNode = (list, k) => {
	let curr = list;
	if (list.data === k) list = list.next;
	else {
		while (curr) {
			if (curr.next && curr.next.data  === k)
				curr.next = curr.next.next;

			curr = curr.next;
		}
	}

	Helper.display(list);
	return list;
}

const main = () => {
	let a = Helper.createLinkedList([1, 2, 3, 4, 56])
	// deleteKthNode(a, 1);
	// deleteKthNode(a, 3);
	deleteKthNode(a, 56);
}

main()