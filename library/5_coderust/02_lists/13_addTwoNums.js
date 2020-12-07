const { List, Helper } = require('./implementation');

// 🕑 O(n)
// 🛰 O(1)
const addTwoNums = (list1, list2) => {
	let dummy = new List(-1);
	let pointer1 = list1;
	let pointer2 = list2;
	let pointerD = dummy;

	let carry = 0;
	let sum;

	while (pointer1 || pointer2) {
		if (!pointer1 && pointer2) sum = pointer2.data;
		else if (!pointer2 && pointer1) sum = pointer1.data
		else sum = pointer1.data + pointer2.data;

		sum += carry;
		carry = Math.floor(sum / 10);
		sum %= 10;

		pointerD.next = new List(sum);
		if (pointer1) pointer1 = pointer1.next;
		if (pointer2) pointer2 = pointer2.next;
		pointerD = pointerD.next;
	}

	if (carry > 0) pointerD.next = new List(carry);

	Helper.display(dummy.next);
	return dummy.next;
}
	
const main = () => {
	let a = Helper.createLinkedList([8, 7, 5, 7])
	let b = Helper.createLinkedList([7, 9, 4])
	addTwoNums(a, b);
}

main()