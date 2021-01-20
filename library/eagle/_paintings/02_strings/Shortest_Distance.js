/*
	🕑 O(n) -- 🛰 O(1)
	Shortest Distance
	Input  : (<ArrayString a>, <String s1>, <String s2>) 
	Output : (<Int>)
*/

shortestDist(a, s1, s2) : <Int> {
	res = Infinity
	idx = -1

	(i < len(a)):
		if (a.i == s1 or s2):
			if (idx == -1 && a.i !== a.idx):
				res = min(i - idx, res)
			idx = i
	∆ res
}