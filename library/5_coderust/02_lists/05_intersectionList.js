const { List, Helper } = require('./implementation');

// 🕑 O(n)
// 🛰 O(1)
const intersectionList = (list1, list2) => {
	let long = getLength(list1) > getLength(list2) ? list1 : list2;
	let short = getLength(list1) > getLength(list2) ? list2 : list1;

	let longPointer = long;
	let shortPointer = short;

	let distance = Math.abs(getLength(list1) - getLength(list2));

	while (distance) {
		longPointer = longPointer.next;
		distance--;
	}

	while (longPointer) {
		if (longPointer.data === shortPointer.data) {
			console.log('longPointer.data', longPointer.data)
			return longPointer.data;
		}
		longPointer = longPointer.next;
		shortPointer = shortPointer.next;
	}

	return null;
}

const getLength = head => {
	let count = 0;
	while (head) {
		count++;
		head = head.next;
	}

	return count;
}

const main = () => {
	let a = Helper.createLinkedList([29, 23, 82, 11, 12, 27])
	let b = Helper.createLinkedList([13, 4, 12, 27])
	intersectionList(a, b);
}

main()