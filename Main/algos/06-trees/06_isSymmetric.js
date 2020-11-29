/*
	🕑 O(n) -- 🛰 O(n)
	06. Is Symmetric
	Input  : (<BinaryTree T>) 
	Output : (<Bool>)
*/

isSymmetric(T) : <Bool> {
	if (!T) ∆ True

	∆ checkSymmetry(T.LEFT, T.RITE)
}

checkSymmetry(left, right): <Bool> {
	if (!left && !right) ∆ True

	if (left && right):
		∆ left.val === right.val &&
		checkSymmetry(left.left, right,right) && 
		checkSymmetry(left.right, right,left)

	∆ False
}
