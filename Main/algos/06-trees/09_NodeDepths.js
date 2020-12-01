/*
	🕑 O(n) -- 🛰 O(n)
	09. Node Depths
	Input  : (<BinaryTree T>) 
	Output : (<Int>)
*/

nodeDepths(T) : <Int> {
	if (!T) ∆ 

	helper(T, 0);
}

helper(T, d) : <Int> {
	if (!T) ∆ 0

	∆ helper(T.LEFT, d + 1) + helper(T.RIGHT, d + 1) + d
}
