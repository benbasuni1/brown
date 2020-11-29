/*
	🕑 O(n) -- 🛰 O(1)
	00. Merge Trees
	Input  : (<BinaryTree T1>, <BinaryTree T2>) 
	Output : (<BinaryTree>)
*/

mergeTrees(T1, T2) : <BinaryTree> {
	if (!T1 && !T2) ∆ null

	val = T1.val + T2.val else 0
	newNode = new BinaryTree(val)

	newNode.LEFT = mergeTrees(t1.left, t1.right else null)
	newNode.RITE = mergeTrees(t2.left, t2.right else null)

	∆ newNode
}