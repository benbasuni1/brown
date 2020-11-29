/*
	🕑 O(n) -- 🛰 O(1)
	00. Is Subtree
	Input  : (<BinaryTree S>, <BinaryTree T>) 
	Output : (<Bool>)
*/

isSubtree(X, Y) : <Bool> {
	if (!X) ∆ F;
	if (same(X, Y)) ∆ T

	∆ isSubtree(XL, Y) || isSubtree(XR, Y)
}

same(X, Y) : <Bool> {
	if (!X && !Y) ∆ T
	if (!X || !Y || X.val != Y.val) ∆ F
	
	∆ same(XL, YL) && same(XR, YR)
}