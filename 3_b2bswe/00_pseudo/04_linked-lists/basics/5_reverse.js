// 🕑 O(n)
// 🛰 O(1)
fn reverse(<LinkedList list>) : <LinkedList> {
	curr = list.head
	prev = null

	while (curr):
		temp = curr.next = prev = curr = temp
	
	return prev
}

fn reverseR(<LinkedList list>) : <LinkedList> {
	fh(<LinkedList node>) : <LinkedList> {
		if (!node || !node.next) return node;

		reversed = fh(node.next);

		right = node.next
		right.next  = node
		node.next = null
		
		return reversed
	}
	return fh(list.head);
}