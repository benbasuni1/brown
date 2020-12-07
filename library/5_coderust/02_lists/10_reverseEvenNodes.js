const { List, Helper } = require('./implementation');

// 🕑 O(n)
// 🛰 O(n)
const reverseEvenNodes = list => {
	let stack = [];

	let curr = list;
	let even = curr.next;

	while (curr && even) {
		stack.push(even);
		curr.next = curr.next.next;
		curr = curr.next;
		even = curr.next;
	}

	curr = list;

	while (curr && curr.next) {
		let temp = curr.next;
		let n = stack.pop();
		curr.next = n;
		n.next = temp;
		curr = curr.next.next;
	}

	Helper.display(list);

}
	
const main = () => {
	let a = Helper.createLinkedList([1, 2, 3, 4, 5, 6, 7])
	reverseEvenNodes(a);
}

main()