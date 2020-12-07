const { List, Helper } = require('./implementation');

// 🕑 O(n)
// 🛰 O(1)
const rotateLinkedList = (list, k) => {
	k %= getLength(list);

	list = reverseInit(list);
	list = reverseFinal(list, k);

	Helper.display(list);
}

const getLength = list => {
	let count = 0;
	let curr = list;
	while (curr) {
		count++;
		curr = curr.next;
	}

	return count;
}

const reverseInit = list => {
	let curr = list;
	let prev = null;

	while (curr) {
		let temp = curr.next;
		curr.next = prev;
		prev = curr;
		curr = temp;
	}

	return prev;
}

const reverseFinal = (list, k) => {
	let curr = list;
	let prev = null;

	while (curr && k > 0) {
		let temp = curr.next;
		curr.next = prev;
		prev = curr;
		curr = temp;
		k--;
	}

	let tailPrev = prev;

	while (tailPrev.next)
		tailPrev = tailPrev.next;

	tailPrev.next = reverseInit(curr)

	return prev;
}

const main = () => {
	let a = Helper.createLinkedList([1, 2, 3, 4, 5])
	rotateLinkedList(a, 2);
}

main()