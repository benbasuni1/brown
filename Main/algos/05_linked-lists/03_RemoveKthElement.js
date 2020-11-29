// 🕑 O(n)

const { LinkedListNode } = require("../../../__common/data_structures/0_node")

// 🛰 O(1)
fn removeKthElement(<LinkedList list>, <int k>) : <LinkedList> {
	dummy = new LinkedListNode(-1);
	dummy.next = list.head

	right = dummy.next
	while (k > 0): right++; k--;

	left = dummy
	while (right): left++; right++;

	left.next = left.next.next;

	return  dummy.next;
}