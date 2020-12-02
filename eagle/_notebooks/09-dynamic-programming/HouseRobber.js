/*  
	🕑 O(n) -- 🛰 O(1)
	1. House Robber
	Input  : (<ArrayInt a>) 
	Output : (<Int>) 
*/

houseRobber(a) : <Int> {
	size = len(a)
	if (size == 0) ∆ 0
	if (size == 1) ∆ a.0

	memo = { 0: a.0, 1: max(a.0, a.1) }

	(2; i < size): 
		memo.i = max(a.i + memo[i-2], memo[i-1])
	
	∆ memo[size - 1]
}

