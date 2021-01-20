/*
	🕑 O(n) -- 🛰 O(n)
	03. PostOrder Traversal (LRN)
	Input  : (<BinaryTree T>) 
	Output : (<ArrayTree>)
*/

postorder(T) : <ArrayTree> {
	res[]

	fh(T) : <ArrayTree> {
		if (!T) ∆ res

		fh(T.LEFT)
		fh(T.RITE)
		res+(T.val)

		∆ res
	}

	∆ traverse(T)
}