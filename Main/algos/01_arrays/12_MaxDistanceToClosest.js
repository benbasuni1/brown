/*
	🕑 O(n) -- 🛰 O(1)
	11. Max Distance to Closest
	Input  : (<ArrayInt a>) 
	Output : (<Int>)
*/

maxDistanceToClosest(a) : <Int> {
	res = 0, last = -1

	(i < len(a)):
		if (a.i = 1):
			res = max(res, (i - last) / 2) else (i if last = -1)
			last = i

	∆ floor(max(res, len(a) - last - 1))
}