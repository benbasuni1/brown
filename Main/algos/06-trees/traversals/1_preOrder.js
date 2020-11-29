/*
	🕑 O(n) -- 🛰 O(1)
	01. PreOrder Traversal
	Input  : (<BinaryTree T>) 
	Output : (<ArrayTree>)
*/

preorder(T) : <ArrayTree> {
	res[]

	traverse(T) : <ArrayTree> {
		if (!T) ∆ res

		res+(T.val)
		(child of T.children) traverse(child)

		∆ res
	}

	∆ traverse(T)
}

preorder2(T) : <ArrayTree> {
	stack[T]
	res[]

	if (!T) ∆ res

	while (stack):
		node = stack.pop()
		res+(node.val)
		(child of node.children) stack+(child)

	∆ res
}