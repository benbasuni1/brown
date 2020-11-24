const { helper: utils, log, line } = require('../../../__common/utils');
const { arrayToList } = require('../../../__common/data_structures/2_linkedList');
const { LinkedListNode } = require('../../../__common/data_structures/0_node');
 
// 🕑 O(n)
// 🛰 O(1)
const deepCopyList = l => {
	let main = l.head;
	let copy = new LinkedListNode(-1);

	while (main) {
		copy.next = new LinkedListNode(main.value);
		main = main.next;
		copy = copy.next;
	}

	return copy.next;
}
	
 
const main = () => {
	log(deepCopyList(arrayToList([1,2,3,4,5,6])))
	log(deepCopyList(arrayToList([1,2,3,4,5,6,7])))
}
 
main();