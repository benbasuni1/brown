const { List, Helper } = require('./implementation');

// 🕑 O(m+n)
// 🛰 O(n)
const mergeSorted = (list1, list2) => {
	let dummy  = new List(-1);
	let pointer1 = list1;
	let pointer2 = list2;
	let curr = dummy;

	while (pointer1 || pointer2) {
		if (!pointer2 || pointer1.data <= pointer2.data)  {
			curr.next = pointer1;
			pointer1 = pointer1.next;
		} else {
			curr.next = pointer2;
			pointer2 = pointer2.next;
		}

		curr = curr.next;
	}

	Helper.display(dummy.next)
	return dummy.next;
}
	
const main = () => {
	let a = Helper.createLinkedList([1, 4])
	let b = Helper.createLinkedList([2, 3])
	mergeSorted(a, b);
}

main()