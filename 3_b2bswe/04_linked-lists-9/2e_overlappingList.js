const { linkedListHelper: utils, log } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2e_linkedList');
const { LinkedListNode } = require('../../__common/data_structures/0_node');

// 🕑 O(n)
// 🛰 O(1)
const findOverlap = (l1, l2) => {

	// get length for both
	let len1 = getLength(l1);
	let len2 = getLength(l2);
	
	// find crossing intersection
	if (len1 > len2)
		l1 = balanceOut(len1 - len2, l1);
	else 
		l2 = balanceOut(len2 - len1, l2);

	// iterate until they both meet
	while (l1 && l2 && l1 !== l2) {
		l1 = l1.next;
		l2 = l2.next;
	}

	return l1.value;
}

const getLength = list => {
	let count = 0;
	let curr = list.head;

	while (curr) {
		curr = curr.next;
		count++;
	}

	return count;
}

const balanceOut = (distance, list) => {
	let curr = list.head;
	while (distance > 0) {
		curr = curr.next;
		distance--;
	}

	return curr;
}

const main = () => {
	log(findOverlap(
		arrayToList([1, 2, 3, 4, 5]),
		arrayToList([7, 3, 4, 5]),
	))
}

main();