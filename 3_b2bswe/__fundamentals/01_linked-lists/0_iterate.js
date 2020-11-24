const { helper: utils, log, line } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2_linkedList');
 
// 🕑 O(n)
// 🛰 O(1)
const iterate = l => {
	let curr = l.head;
	while (curr) curr = curr.next;
	return;
}

const iterateR = l => {
	const fh = node => {
		if (!node) return;

		fh(node.next);
	}

	fh(l.head);
}

const main = () => {
	log(printListIt(iterate([1,2,3,4,5,6,7])))
	log(printListRe(iterateR([1,2,3,4,5,6,7])))
}
 
main();