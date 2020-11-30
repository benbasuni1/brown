/*  
	🕑 O(n) -- 🛰 O(1)
	13. Container with Most Water
	Input  : (<ArrayInt a>) 
	Output : (<Int>)
*/

containerWIthMostWater(a) : <Int> {
	water = 0
	i, j

	while (i < j):
		water = max(water,  width * min(a.i, a.j))
		if (a.i < a.j) i++ else j--
	
	∆ water
}