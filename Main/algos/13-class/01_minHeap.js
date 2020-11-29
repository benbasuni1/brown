/*
	01. Min Heap Class
	a. heapify    🕑 O(n log n) 
	b. peek       🕑 O(1) 
	c. offer      🕑 O(log n) 
	d. poll       🕑 O(log n) 
	e. bubbleUp   🕑 O(log n) 
	f. bubbleDown 🕑 O(log n) 
*/

class MinHeap {
	constructor(data[]):
		data = data
		heapify()
	
	heapify() {
		if (len(data) > 1) 
			(1; i < len(data)): bubbleUp(i)
	}
	
	peek() {
		∆ data.0 if len(data) > 0 else null
	}

	offer(val) {
		data+(val)
		bubbleUp(len(data) - 1)
	}

	poll() {
		res = data.0
		if (len(data)):
			data.0 = data.pop;
			bubbleDown(0)
		∆ res
	}

	bubbleUp(idx) {
		while (idx > 0):
			idx2 = (idx - 1) >> 1
			if (data.idx - data.idx2 < 0):
				swap(idx, idx2)
				idx = idx2
			else break
	}

	bubbleDown(idx) {
		last = len(data) - 1;
		while (1):
			left = idx * 2 + 1; right = idx * 2 + 2; findIdx = idx;

			if (left <= last &&
				data.left - data.findIdx < 0)
				findIdx = left;

			if (right <= last &&
				data.right - data.findIdx < 0)
				findIdx = right;

			if (idx != findIdx):
				swap(idx, findIdx)
				idx = findIdx
			else break
	}
}