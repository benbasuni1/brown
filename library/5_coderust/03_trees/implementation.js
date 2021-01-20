class BinaryTreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
		this.next = null;
		this.parent = null;
		this.count = null;
	}
} 

class Tree {
	constructor(data) {
	  this.data = data;
	  this.children = [];
	}
	
	displayLevelOrder() {
	  if (!this) return;

	  let q = [this];
  
		while (q.length > 0) {
			let temp = q.shift();
			console.log(temp.data + ",");
	
			for (let c in temp.children)
				q.push(temp.children[c]);
		}
	}
}
	
let insert = function(root, d) {
	let pNew = new BinaryTreeNode(d);

	if (!root) return pNew;
	let parent = null;
	let pTemp = root;

	while (pTemp) {
		parent = pTemp;
		if (d < pTemp.data) {
			pTemp = pTemp.left;
		} else {
			pTemp = pTemp.right;
		}
	}

	if (d < parent.data) {
		parent.left = pNew;
	} else {
		parent.right = pNew;
	}

	return root;
}

let findInBST = function(root, d) {
	if (!root) return null;

	if (root.data === d) {
		return root;
	} else if (root.data > d) {
		return findInBST(root.left, d);
	} else {
		return findInBST(root.right, d);
	}
}

// find node in inorder 
let findNode = function(root, d) {
	if (!root) return;

	if (root.data === d) return root;

	let temp = findNode(root.left, d);
	if (temp) return temp;

	return findNode(root.right, d);
}

let displayInorder = function(node) {
	if (!node) return;

	displayInorder(node.left);
	console.log(node.data + ", ");
	displayInorder(node.right);
}

let createBST = function(arr) {
	let root = null;
	for (let x in arr)
		root = insert(root, arr[x]);

	return root;
}

let createBinaryTree = function(count) {
	let root = null;
	for (let i = 1; i < count; i++)
		root = insert(root, Math.floor(Math.random() * 100 + 1));

	return root;
}

let createRandomBST = function(count) {
	let root = null;
	for (let i = 1; i < count; i++)
		root = insert(root, Math.floor(Math.random() * 100 + 200));

	return root;
}

let bstToListRec = function(root, lst) {
	if (!root) return;

	bstToListRec(root.left, lst);
	lst.push(root.data);
	bstToListRec(root.right, lst);
}

let bstToList = function(root) {
	let lst = [];
	bstToListRec(root, lst);
	return lst;
}

let populateParentsRec = function(root, parent) {
	if (!root) return;
	root.parent = parent;

	populateParentsRec(root.left, root);
	populateParentsRec(root.right, root);
}

let populate_parents = function(root) {
	populateParentsRec(root, null);
}

let displayLevelOrder = function(root) {
	if (!root) return;
	let q = [];
	q.push(root);
	let print_level = '';
	while (q.length > 0) {
	let temp = q.shift();
	print_level += temp.data + ",";
	if (temp.left) {
		q.push(temp.left);
	}
	if (temp.right) {
		q.push(temp.right)
	}
	}
	console.log(print_level);
}

let getLevelOrder = function(root) {
	let output = [];
	if (!root) {
	return output;
	}

	let q = [];
	q.push(root);

	while (q.length > 0) {
	let temp = q.shift();
	output.push(temp.data);
	if (temp.left) {
		q.push(temp.left);
	}
	if (temp.right) {
		q.push(temp.right);
	}
	}
	return output;
}

let getInorderHelper = function(root, output) {
	if (!root) {
	return output;
	}

	output = getInorderHelper(root.left, output);
	output.push(root.data);
	output = getInorderHelper(root.right, output);

	return output;
}

let getInorder = function(root) {
	let output = [];
	return getInorderHelper(root, output);
}

let isIdenticalTree = function(root1, root2) {
	if (!root1 && !root2) return true;

	if (root1 && root2 && root1.data === root2.data) {
		return isIdenticalTree(root1.left, root2.left) && isIdenticalTree(root1.right, root2.right);
	}

	return false;
}