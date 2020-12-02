const { LinkedListNode: Node } = require('./0_node');

class LinkedList {
	constructor(val) {
		this.head = new Node(val);
		this.size = 0;
	}

	// 🕑 O(n)
	get(index) {
		if (index < 0 || index >= this.size) return -1;

		let curr = this.head;
		for (let i = 0; i < index; i++) 
			curr = curr.next;

		return curr.val;
	}

	// 🕑 O(n)
	add(index, val) {
		if (index < 0 || index >= this.size) return;

		let newNode = new Node(val);
		let curr = this.head;
		for (let i = 0; i < index; i++)
			curr = curr.next;

		newNode.next = curr.next;
		curr.next = newNode;

		this.size++;
	}

	// 🕑 O(n)
	delete(index) {
		if (index < 0 || index >= this.size) return;

		let curr = this.head;
		for (let i = 0; i < index; i++)
			curr = curr.next;

		curr.next = curr.next.next;
		this.size--;
	}
	
	// 🕑 O(1)
	addHead(val) {
		let newNode = new Node(val);

		newNode.next = this.head.next;
		this.head.next = newNode;
		this.size++;
	}

	// 🕑 O(n)
	addTail(val) {
		let newNode = new Node(val);
		if (!this.head) this.head = newNode;

		let curr = this.head;
		while (curr.next) curr = curr.next;

		curr.next = newNode;
		this.size++;
	}
}

const appendToList = (init, toAdd) => {
	if (toAdd.head === null) return;

	init.append(toAdd.head);
	init.tail = toAdd.tail;
}

const arrayToList = (a, cycle = false) => {
	let list = new LinkedList(a[0]);
	list.size = 1;
	
	// add the nodes
	for (let i = 1; i < a.length; i++)
		list.addTail(a[i]);

	// set the tail
	let node = list.head;
	while (node !== null && node.next) node = node.next;
	list.tail = node;

	if (cycle) list.tail.next = list.head;

	return list;
}


module.exports = {
	LinkedList,
	arrayToList,
	appendToList
}