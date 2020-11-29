/*  
	🕑 O(n) -- 🛰 O(n)
	6. Merge Lists
	Input  : (<LinkedList list1>, <LinkedList list2>) 
	Output : (<LinkedList>)
*/

mergeLists(<LinkedList list1>, <LinkedList list2>) : <LinkedList> {
	if (!list1) ∆ list2; if (!list2) ∆ list1;
	l1 = list1.head; l2 = list2.head;

	cur = dummy = new List(-1);

	while (l1 && l2):
		if (l1.val <= l2.val) cur.nxt = l1; l1++;
		else cur.nxt = l2; l2++;
		cur++

	cur.nxt = l1 else l2;
	∆ dummy.nxt
}
