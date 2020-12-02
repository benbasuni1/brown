/*  
	🕑 O(n) -- 🛰 O(1)
	6. Find Nums Disappeared
	Input  : (<ArrayInt a>) 
	Output : (<ArrayInt>) 
*/

findNumsDisappeared(a) : <ArrayInt> {
	res[]
	(i < len(a)):
		m = abs(a.i) - 1
		a.m = a.m > 0 ? -a.m : a.m

	(i < len(a)):
		if (a.i > 0) res+(i + 1)
	∆ res
}
