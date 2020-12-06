
const { List, Helper } = require('./implementation');

// 🕑 O(n)
// 🛰 O(n)
const removeDuplicates = list => {
	let curr = list;
	let map = {};
	map[curr.data] = 1;

	while (curr.next) {
		if (!map[curr.next.data]) {
			map[curr.next.data] = 1;
			curr = curr.next;
		} else {
			curr.next = curr.next.next;
		}
	}

	Helper.display(list);
	return list;
}

const main = () => {
	let a = Helper.createLinkedList([4, 7, 4, 9, 11, 7, 3])
	removeDuplicates(a);
}

main()