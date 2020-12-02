const u = require('../utils');

class BinarySearchTree {
	constructor(val) {
		this.value = val;
		this.right = null;
		this.left = null;
	}

	insert(x) {
		if (x > this.value) {
			if (!this.right) this.right = new BinarySearchTree(x);
			else this.right.insert(x);
		} else {
			if (!this.left) this.left = new BinarySearchTree(x);
			else this.left.insert(x);
		}

		return this;
	}

	contains(x) {
		if (x === this.value) return true;
		else if (x < this.value) {
			if (!this.left) return false;
			else return this.left.contains(x);
		} else {
			if (!this.right) return false;
			else return this.right.contains(x);
		}
	}

	remove(x, parent = null) {
		if (!this) return;

		if (this.value === x) {
			// is a leaf node
			if (!this.left && this.right) {
				if (parent.left === this) parent.left = null;
				else parent.right = null;
				return;
			}

			// has no right child
			if (!this.right) {
				if (parent.right === this) parent.right = this.left;
				else parent.left = this.left;
				return;
			}

			// has no left child
			if (!this.left) {
				if (parent.right === this) parent.right = this.right;
				else parent.left = this.right;
				return;
			}

			// has both children
			if (this.right && this.left) {
				let minVal = this.right;
				while (minVal.left) minVal = minVal.left;
				this.value = minVal.value;
				this.right.remove(minVal.value, this);
			}
		} else if (x < this.value) {
			if (this.left) this.left.remove(x, this);
		} else { 
			if (this.right) this.right.remove(x, this);
		}

		return this;
	}
	
	getMinValue() {
		if (!this.left) return this.value;
		else return this.left.getMinValue();
	}
}

module.exports = {
	BinarySearchTree
}

		/*
		if (x < this.value) {
			// if you have left, continue recursing
			if (this.left) this.left.remove(x, this);
		} else if (x > this.value) {
			// if you have right, continue recursing
			if (this.right) this.right.remove(x, this);
		} else {
			// if 2 children
			if (this.left && this.right) {
				this.value = this.right.getMinValue()
				this.right.remove(this.value, this);
			} else if (parent === null) {
				if (this.left) {
					this.value = this.left.value;
					this.right = this.left.right;
					this.left = this.left.left;
				} else if (this.right) {
					this.value = this.right.value;
					this.left = this.right.left;
					this.right = this.right.right;
				}
			} else if (parent.left === this) {
				parent.left = this.left ? this.left : this.right;
			} else if (parent.right === this) {
				parent.right = this.left ? this.left : this.right;
			}
		}
		*/
