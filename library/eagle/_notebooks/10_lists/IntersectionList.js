/*  
	🕑 O(n) -- 🛰 O(1)
	7. Intersection List
	Input  : (<LinkedList l1>, <LinkedList l2>) 
	Output : (<LinkedList>) 
*/

intersectionList(<LinkedList list1>, <LinkedList list2>) : <LinkedList> {
	if (!list1 || !list2) ∆;

	head1 = l1.head; head2 = l2.head;
	tail1 = l1.head; tail2 = l2.head;

	while (tail1 != tail2):
		tail1 = tail1 ? tail1++ : head2;
		tail2 = tail2 ? tail2++ : head1;

	∆ tail1;
}
