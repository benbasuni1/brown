const Helper = require('../../__common/data_structures/2e_linkedList');
const { linkedListHelper } = require('../../__common/utils');
/*
	Because palindromes are symmetrical,
	forward and backward reading should be the same.
	This is the key feature to solving palindromes

	traverse(head) {
		// pre-order
		traverse(head.next);
		// post-order
	}
*/

// ⚽️ Backtracking
// 🕑 O(n)
// 🛰 O(n)
const isPalindrome = list => {
	let left = list.head;

	const helper = right => {
		if (right === null) return true;
		let res = helper(right.next);

		res = res && (left.value === right.value);
		left = left.next;
		return res;
	}

	return helper(list.head);
}

// ⚽️ Fast/Slow
// 🕑 O(n)
// 🛰 O(1)
const isPalindrome2 = list => {
	let head = list.head;
	let fast = head;
	let slow = head;

	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// take into account odd length
	if (fast !== null) slow = slow.next;

	let left = head;
	let right = reverse(slow);

	while (right) {
		if (left.value !== right.value) return false;
		left = left.next;
		right = right.next;
	}

	return true;
}

const reverse = head => {
	let pre = null;
	let curr = head;
	let next = head;

	while (curr) {
		next = curr.next;
		curr.next = pre;

		pre = curr;
		curr = next;
	}

	return pre;
}
	
const main = () => {
	let a = Helper.arrayToList([1, 4, 4, 1])
	let b = Helper.arrayToList([1, 2, 3, 2, 1])
	let c = Helper.arrayToList([1, 2, 3, 4, 5])
	let d = Helper.arrayToList([1, 2, 9, 1])
	console.log(isPalindrome2(a));
	console.log(isPalindrome2(b));
	console.log(isPalindrome2(c));
	console.log(isPalindrome2(d));
}

main()