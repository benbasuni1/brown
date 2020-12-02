/*
	https://leetcode.com/problems/copy-list-with-random-pointer/
	🕑 O(n) -- 🛰 O(n)
	00. Copy List with Random Pointer
	Input  : (<LinkedList list>) 
	Output : (<LinkedList>)
*/

copyListRandomPointer(list) : <LinkedList> {
	if (!list) ∆ ; map = new Map()
	curr = list.head

	while (curr):
		map.set(curr, new Node(val, next, random))
		curr++

	newHead = map.get(list.head)

    (node of map.values())
        if(node.next) node.next = map.get(node.next);
        if(node.random) node.random = map.get(node.random);
	
	∆ newHead
}
