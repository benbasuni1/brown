// 🕑 O(n)

const { LinkedList } = require("../../../__common/data_structures/2e_linkedList")

// 🛰 O(1)
fn findOverlap(<LinkedList l1>, <LinkedList l2>) : <LinkedList> {
	len1 = getLength(l1)
	len2 = getLength(l2)

	if (len1 > len2): 
		l1 = findIntersection(len1 - len2, l1)
	else
		l2 = findIntersection(len2 - len1, l2)

	while (l1, l2, l1 != l2): l1++; l2++;

	return l1.value

}

fn getLength(<LinkedList list>) : <int> {
	count = 0
	curr = list.head
	while (curr): curr++; count++

	return count;
}

fn findIntersection(<int distance> <LinkedList list>) : <LinkedList> {
	curr  = list.head
	while (distance > 0): curr++; distance--

	return curr
}