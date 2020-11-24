const { helper: utils, log, line } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2_linkedList');
 
// 🕑 O()
// 🛰 O()
const printReverseListIt = l => {
	let stack = [];
	let curr = l.head;

	while (curr) {
		stack.push(curr.value);
		console.log('in order', curr.value)
		curr = curr.next;
	}

	while (stack.length) { 
		let val = stack.pop();
		console.log('reverse order', val)
	}

	return;
}

const printReverseListRe = l => {
	fh = node => {
		if (!node) return;

		console.log('in order', node.value);
		fh(node.next);
		console.log('reverse order', node.value);
	}

	fh(l.head);
}
 
const main = () => {
	// log(printReverseListIt(arrayToList([1,2,3,4,5,6,7])))
	log(printReverseListRe(arrayToList([1,2,3,4,5,6,7])))
}
 
main();