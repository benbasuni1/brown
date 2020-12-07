const { ListNode } = require("./implementation");

const { List } = require('./implementation');
 
const main = () => {
	let abc = new List();

	let a = abc.createLinkedList([1, 2])
	a = abc.insertAtHead(a, 99);
	a = abc.insertAtTail(a, 20)

	abc.display(a);
}
 
main();