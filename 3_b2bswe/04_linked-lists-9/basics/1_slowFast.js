const { helper: utils, log, line } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2_linkedList');
 
// 🕑 O(n)
// 🛰 O(1)
const slowFast = l => {
	let slow = l.head;
	let fast = l.head;

	while (fast.next) {
		fast = fast.next;
		if (fast.next) {
			fast = fast.next;
			slow = slow.next;
		}
	}

	return slow.value;
}
 
const main = () => {
	log(slowFast(arrayToList([1,2,3,4,5,6])))
	log(slowFast(arrayToList([1,2,3,4,5,6,7])))
}
 
main();
