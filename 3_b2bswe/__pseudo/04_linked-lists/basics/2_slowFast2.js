// 🕑 O(n)
// 🛰 O(1)

fn findKthLastElement (<LinkedList list> <int k>) : <LinkedList> {
	slow = fast = list.head;
	(i < k) fast++

	while (fast): fast++; slow++;

	return slow;
}