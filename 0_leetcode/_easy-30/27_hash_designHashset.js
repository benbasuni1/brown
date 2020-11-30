var MyHashSet = function(maxLength = 1000, set = []) {
	this.maxLength = maxLength
	this.set = set
  };
  
  MyHashSet.prototype.getIndex = function(key) {
	  return key % this.maxLength
  };
  
  MyHashSet.prototype.getPos = function(key, index) {
	bucket = this.set[index]
	if (bucket === undefined) return -1
	return bucket.indexOf(key)
  };
  
  MyHashSet.prototype.add = function(key) {
	index = this.getIndex(key)
	pos = this.getPos(key, index)
	if (pos < 0) {
	  if (this.set[index] === undefined) {
		this.set[index] = []
	  }
	  this.set[index].push(key)
	}
  };
  
  MyHashSet.prototype.remove = function(key) {
	index = this.getIndex(key)
	pos = this.getPos(key, index)
	if (pos > -1) {
	  this.set[index].splice(pos, 1)
	}
  };
  
  MyHashSet.prototype.contains = function(key) {
	index = this.getIndex(key)
	pos = this.getPos(key, index)
	return pos > -1
  };
