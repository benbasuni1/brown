/*
	🕑 O(n) -- 🛰 O(n)
	07. Has Path Sums
	Input  : (<BinaryTree T>, <Int k>) 
	Output : (<Bool>)
*/

hasPathSum(T, k) : <Bool> {
	if (!T) ∆ False
	if (!T.LEFT && !T.RITE) ∆ k === T.val
	else ∆ hasPathSum(T.LEFT, k - T.val) || hasPathSum(T.RITE, k - T.val)
}