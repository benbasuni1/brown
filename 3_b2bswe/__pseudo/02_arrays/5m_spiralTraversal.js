/*  
	🕑 O(mn) -- 🛰 O(n)
	5. Spiral Traversal
	Input  : (<Arr <Arr int a>>) 
	Output : (<Arr <Arr>>)

	    y <= y2 ; x._  ; x++
	    x <= x2 ; _.y2 ; y2--
	x : y2 >= y ; x2._ ; x2--
	y : x2 >= x ; _.y  ; y++
*/

{
	x, y = 0
	x2 = len(m) - 1
	y2 = len(m[0]) - 1
	result = []

	while (x <= x2 && y <= y2):
		(y; i <= y2) +(m[x][i]); x++

		(x; i <= x2) +(m[i][y2]); y2--

		if (x <= x2):
			(y2; i >= y) +(m[x2][i]); x2--

		if (y <= y2):
			(x2; i >= x) +(m[i][y]);  y++

	return result;
}