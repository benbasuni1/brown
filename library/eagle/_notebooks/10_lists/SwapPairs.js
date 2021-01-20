/*
	🕑 O() -- 🛰 O()
	08. Swap Pairs
	Input  : (<LinkedList list>) 
	Output : (<LinkedList>)
*/

swapPairs(list) : <LinkedList> {
	// Attach dummy + add pointers
	d = List(-1); d+ = list.head
	prev = d ; curr = d+

	// Perform swap
	while (curr+):
		swap(prev, curr, curr+)
		prev = curr
		curr = curr+
	
	∆ d+
}

swap(prev, curr, p1):
	prev+ = p1
	curr+ = p1+
	p1+ = curr