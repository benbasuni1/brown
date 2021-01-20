// 🕑 O(n)
// 🛰 O(1)

fn deepCopyList(<LinkedList list>) : <LinkedList> {
	curr = list.head
	copy = new LinkedListNode(-1);

	while (curr):
		copy.next = new LinkedListNode(curr.value);
		curr++
		copy++

	return copy.next;
}