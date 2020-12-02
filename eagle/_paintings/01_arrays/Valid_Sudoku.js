/*  
	🕑 O(mn) -- 🛰 O(n)
	4. Valid Sudoku
	Input  : (<Array2DString a>) 
	Output : (<Bool>)
*/

validSudoku(a) : <Bool> {
	(i < 9):
		rowMap{}, colMap{}, boxMap{}
		(j < 9):
			row = m.i.j; col = m.j.i
			box = m[3(i/3) + 3(j/3)][3(i%3) + 3(j%3)]

			if (row|col|box != '.')
				if (map[row|col|box]) ∆ false
				map[row|col|box] = 1

	∆ true
}
