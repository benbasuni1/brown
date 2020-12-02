const { helper: utils, log, line } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2_linkedList');
 
// 🕑 O(n)
// 🛰 O(1)
const findKthToLastElement = (l, k)=> {
	let slow = l.head;
	let fast = l.head;

	for (let i = 0; i < k; i++) {
		fast = fast.next;
	}

	while (fast) {
		fast = fast.next;
		slow = slow.next;
	}

	return slow.value;
}
	
 
const main = () => {
	log(findKthToLastElement(arrayToList([1,2,3,4,5,6]), 2))
	log(findKthToLastElement(arrayToList([1,2,3,4,5,6,7]), 4))
}
 
main();