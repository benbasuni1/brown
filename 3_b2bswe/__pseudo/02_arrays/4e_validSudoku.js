// 🕑 O(mn)
// 🛰 O(n)
// 4. Valid Sudoku

(0; i < 9):
	rowMap{}, colMap{}, boxMap{}
	(0; j < 9):
		row = m.i.j; col = m.j.i
		box = m[3(i/3) + 3(j/3)][3(i % 3) + 3(j % 3)]

		if (row|col|box === '.')
			if (row|col|box| in map) return false
			map[row|col|box] = 1