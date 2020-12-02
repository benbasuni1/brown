const { linkedListHelper: utils, log } = require('../../__common/utils');
const { arrayToList } = require('../../__common/data_structures/2e_linkedList');
const { LinkedListNode } = require('../../__common/data_structures/0_node');

// 🕑 O(n)
// 🛰 O(n)
const copyList = list => {
	if (!list) return null; 
    
    let curr = list.head;    
    let map = new Map(); 
    
    while(curr) {
        map.set(curr, new Node(curr.val, curr.next, curr.random));
        curr = curr.next;
    }
    
    let newHead = map.get(head);
    
    for (let newNode of map.values()) {
        if(newNode.next) newNode.next = map.get(newNode.next);
        if(newNode.random) newNode.random = map.get(newNode.random);
    }
    
    return newHead;
}
const main = () => {
	copyList(arrayToList([1, 2, 3, 4, 5]))
}

main()