// 🕑 O(n)
// 🛰 O(1)

fn slowFast(<LinkedList list>) : list {
	slow = fast = list.head;

	while (fast.next):
		fast++
		if (fast.next):	fast++; slow++

	return slow
}