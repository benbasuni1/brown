/*
	🕑 O(n) -- 🛰 O(1)
	04. Trim BST
	Input  : (<BinaryTree T>, <Int i>, <Int j>) 
	Output : (<BinaryTree>)
*/

trimBST(T, i, j) : <BinaryTree> {
	if (!T) ∆ null

	if (T.val < i): ∆ trimBST(T.RITE, i, j)
	if (T.val > j): ∆ trimBST(T.LEFT, i, j)

	T.LEFT = trimBST(T.LEFT, i, j)
	T.RITE = trimBST(T.RITE, i, j)

	∆ T
}