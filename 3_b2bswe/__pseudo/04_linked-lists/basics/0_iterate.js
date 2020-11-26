// 🕑 O(n)
// 🛰 O(1)

fn iterate = <LinkedList list> : null {
	curr = list.head
	while (curr) curr = curr.next;
}

fn iterateRec = (<LinkedList L>) : null {
	fn fh(<LinkedNode node>):
		if (!node) return
		fh(node.next)

	fh(list.head)
}
