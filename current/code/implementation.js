class List {
	constructor(data) {
		this.data = data;
		this.next = null;
	}

	insertAtHead(head, data) {
		let n = new List(data);
		n.next = head;
		return n;
	}

	insertAtTail(head, data) {
		let newNode = new List(data);

		if (!head) return newNode;
		let curr = head;

		while (curr.next) curr = curr.next;
		curr.next = newNode;
		newNode.next = null;

		return head;
	}

} 

const Helper = {
	createLinkedList: list => {
		let a = new List();
		let listHead = null;
		list.reverse();
		for (let i = 0; i < list.length; i++) {
			listHead = a.insertAtHead(listHead, list[i])
		}

		return listHead;
	},
	display: head => {
		let curr = head;
		let s = "";

		while (curr) {
			s += curr.data;
			curr = curr.next;
			if (curr) s += ", "
		}

		console.log(s);
		return s;
	}, 
}

module.exports = {
	List,
	Helper
}