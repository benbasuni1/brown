/*
	🕑 O(n) -- 🛰 O(n)
	02. Inorder Traversal (LNR)
	Input  : (<BinaryTree T>) 
	Output : (<ArrayTree>)
*/

inorder(T) : <ArrayTree> {
	res[]

	fh(T) : <ArrayTree> {
		if (!T) ∆ res

		fh(T.LEFT);
		res+(T.val)
		fh(T.RITE);

		∆ res
	}

	∆ traverse(T)
}