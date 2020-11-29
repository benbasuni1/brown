/*
	🕑 O(n) -- 🛰 O(n)
	01. PreOrder Traversal (NLR)
	Input  : (<BinaryTree T>) 
	Output : (<ArrayTree>)
	// (n of T.nodes) fh(n)
	// (child of n.children) stack+(child)
*/

preorder(T) : <ArrayTree> {
	res[]

	fh(T) : <ArrayTree> {
		if (!T) ∆ res

		res+(T.val)
		fh(T.LEFT)
		fh(T.RITE)

		∆ res
	}

	∆ traverse(T)
}

preorder2(T) : <ArrayTree> {
	stack[T]
	res[]

	if (!T) ∆ res

	while (stack):
		n = stack.pop()
		res+(node.val)
		if (n.LEFT) stack+(n.LEFT)
		if (n.RITE) stack+(n.RITE)

	∆ res
}