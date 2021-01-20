/*
	🕑 O(n) -- 🛰 O(n)
	08. Construct Tree from InPost Orders
	Input  : (<ArrayInt in1>, <ArrayInt post>) 
	Output : (<BinaryTree>)
*/

constructTree(in1, post) : <BinaryTree> {
	helper(s, e):
		if (s > e) ∆ null
		
		val = post.pop()
		t = new Tree(val)

		t.right = helper(map.val + 1, e)
		t.left = helper(s, map.val - 1)

		∆ t

	map{}
	(i < len(in1)): map.in1[i] = i
	∆ helper(0, len(in1) - 1)
}