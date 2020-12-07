const { List, Helper } = require('./implementation');

// 🕑 O()
// 🛰 O()
const copyListWithArbitrary = list => {
    if (!list) return null;
    let map = new Map();
    let curr = list;
	
	// map[node : copyNode]
    while (curr) {
		map.set(
			curr, 
			new Node(curr.val, curr.next, curr.random)
		);
        curr = curr.next;
    }
    
    let newHead = map.get(head)
		
	// Go through map and set next and random to the values
    for (let newNode of map.values()) {
        if(newNode.next) newNode.next = map.get(newNode.next);
        if(newNode.random) newNode.random = map.get(newNode.random);
    }
    
    return newHead
}
	
const main = () => {
	let a = Helper.createLinkedList([1, 2, 3, 4, 56])
	copyListWithArbitrary(a);
}

main()