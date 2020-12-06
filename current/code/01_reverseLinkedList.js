const { List, Helper } = require('./implementation');

// 🕑 O(n)
// 🛰 O(1)
const reverse = list => {
	if (!list || !list.next) return list;

	let curr = list;
	let prev = null;

	while (curr) {
		let temp = curr.next;
		
		curr.next = prev;
		prev = curr;
		curr = temp;
	}

	Helper.display(prev);
	return prev;
}

const main = () => {
	let a = Helper.createLinkedList([1, 2, 3, 4, 56])
	reverse(a)
}

main()