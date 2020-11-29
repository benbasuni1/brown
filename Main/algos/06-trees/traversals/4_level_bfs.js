/*
	🕑 O(n) -- 🛰 O(n)
	04. Level Order Traversal (NLR) - BFS
	Input  : (<BinaryTree T>) 
	Output : (<ArrayTree>)
*/

levelOrder(T) : <ArrayTree> {
	que[T]
	res[]

	while (que):
		qlen = len(que)
		levels[]
		(i < qLen): 
			n = que.shift()
			if (n.LEFT) que.push(n.LEFT)
			if (n.RIGHT) que.push(n.RIGHT)
			levels+(n.val)
		res+(levels)
	
	∆ res
}

