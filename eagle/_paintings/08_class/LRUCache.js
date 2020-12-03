/*
	LRU Cache Class
	a. get 🕑 O(1) 
	b. put 🕑 O(n) 
*/

class LRUCache {
	constructor(capacity) {
		capacity
		count = 0
		map{}
		head = tail = null
	}

	get(k) {
		if (map.k) {
			{ val, left, right } = map.k

			if (left) left.right = right
			if (right) right.left = left || right.left

			if (tail == map.k) tail = left || map.k

			map.k.left = null

			if (head != map.k) {
				map.k.right = head
				head.left = map.k
			}

			head = map.k

			∆ val
		}
		∆ -1
	}

	put(k, val) {
		if (map.k) {
			map.k.val = val
			get(k)
		} else {
			map.k = { k, val, left: null, right: null }
			if (head) {
				head.left = map.k
				map.k.right = head
			}

			head = map.k

			if (!tail) tail = map.k

			count++;
		}

		if (count > capacity) {
			removed = tail.k

			if (tail.left) {
				tail.left.right = null
				tail = tail.left
				map.removed.left = null
			}

			delete map.removed

			count--
		}
	}
}