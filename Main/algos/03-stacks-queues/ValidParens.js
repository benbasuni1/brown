/*  
	🕑 O(n) -- 🛰 O(n)
	1. Valid Parentheses
	Input  : (<String s>) 
	Output : (<Bool>)
*/

validParens(<String s>) : <Bool> {
	map = { ")( }{ ][" }
	stk[]

	(item of s): 
		if (map.item):
			if (len(stk) = 0 ||
				stk.pop() != map.item ) 
			∆ false
		else +(item)

	∆ true
}

