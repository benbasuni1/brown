/*
	02. Hashset Class
	a. add       🕑 O(1) 
	b. remove    🕑 O(n) 
	c. contains  🕑 O(1) 
		i.  getIndex 🕑 O(1) 
		ii. getPos   🕑 O(1) 
*/

class HashSet {
	constructor() {
		maxLength = 1000
		set[]
	}

	getIdx(key) { ∆ key % maxLength }

	getPos(key, idx) {
		bucket = set.idx
		∆ bucket.idxOf(key) else -1
	}

	add(key) {
		if (getPos(key, getIdx(key)) < 0): 
			if (set.idx == undefined) set.idx[]
			set.idx+(key)
	}
	remove(key) {
		if (getPos(key, getIdx(key)) > -1): 
			set.idx.splice(pos, 1)
	}
	contains(key) {
		∆ getPos(key, getIdx(key)) > -1
	}
}