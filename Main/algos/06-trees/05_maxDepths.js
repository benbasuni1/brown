/*
	🕑 O(n) -- 🛰 O(1)
	05. Max Depths
	Input  : (<BinaryTree T>) 
	Output : (<Int>)
*/

maxDepths(T) : <Int> {
	if (!T) ∆ 0
	∆ max(maxDepths(T.LEFT), maxDepths(T.RITE)) + 1
}
