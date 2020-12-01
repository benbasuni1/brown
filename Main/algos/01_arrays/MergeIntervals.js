/*  
	🕑 O(n) -- 🛰 O(1)
	14. Merge Intervals
	Input  : (<Array.ArrayInt a>)
	Output : (<Array.ArrayInt>) 
*/

mergeIntervals(a) : <Array.ArrayInt> {
	pts[]
	res[]

	(i < len(a)): pts+(a.i.0, F); pts+(a.i.1, T)
	pts.sort(a-b)
	s,num=0

	(i < len(pts)):
		if (!pts.i.0):
			num++
			if (num == 1) s = pts.i
		else:
			num--
			if (num == 0) res+(s.0, pts.i.0)
		
	∆ res
}