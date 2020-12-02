// 🕑 O()
// 🛰 O()
fn printReverseList (<LinkedList list>) : null {
	stack = []
	curr = list.head

	while (curr):
		stack.push(curr.value) // in order
		curr = curr.next;

	while (len(stack)): 
		stack.pop() // back track
}

fn printReverseListRe (<LinkedList list>) : null {
	fn fh (<LinkedNode node>): null {
		if (!node) return;
		// in order 
		fh(node.next);
		// back track
	}

	fh(list.head)
}