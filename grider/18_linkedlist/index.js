// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let count = 0;
		let current = this.head;

		while (current) {
			count++;
			current = current.next;
		}

		return count;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (this.head === null) return;
		let current = this.head;

		while (current.next !== null) current = current.next;

		return current;
	}

	clear() { 
		this.head = null;
	}

	removeFirst() {
		if (this.head === null) return null;
		if (this.head.next === null) this.head = null;
		else this.head = this.head.next;
	}

	removeLast() {
		if (this.head === null) return null;
		if (this.head.next === null) { 
			this.head = null;
			return;
		}

		let current = this.head;
		while (current.next && current.next.next !== null) {
			current = current.next;
		}

		current.next = null;
	}

	insertLast(data) {
		if (this.head === null) this.head = new Node(data);
		let current = this.head;

		while (current.next !== null) {
			current = current.next;
		}

		current.next = new Node(data);
	}

	getAt(n) {
		if (this.head === null) return null;
		let current = this.head;

		for (let i = 0; i <= n; i++) {
			current = current.next;
		}

		return current;
	}

	removeAt(n) {
		if (this.head === null) return null;
		if (this.head.next === null) {
			this.head = null;
			return;
		}

		let current = this.head;
		let prev = current;
		current = current.next;

		for (let i = 1; i <= n; i++) {
			if (current && current.next !== null) {
				prev = current;
				current = current.next;
			}
		}

		if (current.next === null) prev.next = null;
		prev.next = current.next
	}

	insertAt(data, n) {
		if (this.head === null) {
			this.head = new Node(data);
			return;
		}
		if (n === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const prev = this.getAt(n - 1) || this.getLast();
		const node = new Node(data, prev.next);
		prev.next = node;
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while (node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

const l = new LinkedList();

l.insertLast('a');
l.insertLast('b');
l.insertAt('hi', 30);

console.log(l.getAt(0).data)
console.log(l.getAt(1).data)
console.log(l.getAt(2).data)

module.exports = { Node, LinkedList };
