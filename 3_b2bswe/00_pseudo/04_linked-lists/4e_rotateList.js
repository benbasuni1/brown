// 🕑 O(n)
// 🛰 O(1)
fn rightRotate(<LinkedList list>, <int k>) : <LinkedList> {
	if (!list) return list;
	size = 1
	tail = list.head

	while (tail.next): tail++; size++;

	k %= size;
	if (k === 0) return list.head;

	tail.next = list.head
	newTail = list.head;

	while (k - 1 > 0): newTail++; k--;

	temp = newTail.next
	newTail.next = null;

	return temp;
}