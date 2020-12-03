/*
	🕑 O(n log n) -- 🛰 O(log n)
	Quick Sort
	Input  : (<ArrayInt a>) 
	Output : (<ArrayInt>)
*/

QuickSort(a) : <ArrayInt> {
	helper(a, s, e) {
		if (s >= e) ∆

		pivot = a.s, left = s

		(s+1; i <= e):
			right = i
			if (a.right < pivot):
				left++
				swap(left, right)

		swap(left, s)

		helper(a, s, left - 1)
		helper(a, left + 1, e)
		∆ a
	}

	∆ helper(a, 0, len(a) - 1)
}