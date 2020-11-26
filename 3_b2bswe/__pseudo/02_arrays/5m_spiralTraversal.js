/*  
	🕑 O(mn) -- 🛰 O(n)
	5. Spiral Traversal
	Input  : (<Arr <Arr int a>>) 
	Output : (<Arr <Arr>>)
*/

{
	x, y = 0
	x2 = len(m) - 1
	y2 = len(m[0]) - 1
	result = []

	while (x <= x2 && y <= y2):
		(y; i <= y2) result.push(m[x][i]); x++

		(x; i <= x2) result.push(m[i][y2]); y2--

		if (x <= x2):
			(y2; i >= y) result.push(m[x2][i]); x2--

		if (y <= y2):
			(x2; i >= x) result.push(m[i][y]);  y++

	return result;
}