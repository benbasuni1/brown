// 🕑 O(n)
// 🛰 O(1)

fn evenOdd(<LinkedList list>) : <LinkedList> {
	if (!list) return

	index = 0
	curr = list.head

	evenHead = oddHead = new LinkedListNode(-1)

	evenTail = evenHead
	oddTAil = oddHead

	while (curr):
		if (index is even):
			evenTail.next = curr
			evenTail = curr
		else:
			oddTail.next = curr
			oddTail = curr

		curr++; index++

	evenTail.next = oddHead.next;
	oddTail.next = null;

	return evenHead.next
}