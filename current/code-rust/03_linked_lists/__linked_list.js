let LinkedListNode = function(data){
	this.data = data;
    this.next = null;
}

let insertAtHead = function(head, data) {
	let newNode = new LinkedListNode(data);
	newNode.next = head;
	return newNode;
}
  
let insertAtTail = function(head, node) {
	if (!head) {
		return node;
	}

	let temp = head;

	while (temp.next) {
		temp = temp.next;
	}

	temp.next = node;
	return head;
}
  
let createRandomLinkedList = function(length) {
	let listHead = null;
	for (let i = 0; i < length; i++) {
		listHead = insertAtHead(listHead, Math.floor(Math.random() * 100 + 1));
	}
	return listHead;
}

let createLinkedList = function(lst) {
	let listHead = null;
	lst.reverse();
	for (let x = 0; x < lst.length; x++) {
		listHead = insertAtHead(listHead, lst[x]);
	}
	return listHead;
}
  
let display = function(head) {
	let temp = head;
	let s = "";
	while (temp) {
		s += temp.data;
		temp = temp.next;
		if (temp) {
		s += ", ";
		}
	}
	return s;
};

