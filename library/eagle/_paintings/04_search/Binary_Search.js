/*
	🕑 O(log n) -- 🛰 O(1)
	Binary Search
	Input  : (<ArrayInt a>, <Int k>) 
	Output : (<Int>)
*/

BinarySearch(a) : <Int> {
	s = 0, e = len(a) - 1

	while (s <= e):
		m = floor(s + (e - s) / 2)
		if (a.m == k) ∆ m
		elif (a.m > k) move e left
		else move s right

	∆ -1
}