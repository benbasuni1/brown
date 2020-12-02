var LRUCache = function(cap) {
	this.cap = cap;
	this.c = 0;
	this.h = null;
	this.t = null;
	this.obj = {};
  };
  
  LRUCache.prototype.get = function(k) {
	if (this.obj[k]) {
	  const { val, l, r } = this.obj[k];
	  
	  // move node to head since it was most recently used
	  if (l) { l.r = r; }
	  if (r) { r.l = l || r.l; }
  
	  if (this.t === this.obj[k]) this.t = l || this.obj[k];
  
	  this.obj[k].l = null;
	  
	  if (this.h !== this.obj[k]) {
		  this.obj[k].r = this.h;
		  this.h.l = this.obj[k];
	  }
  
	  this.h = this.obj[k];
  
	  return val;
	}
  
	return -1;
  };
  
  LRUCache.prototype.put = function(k, val) {
	  if (this.obj[k]) {
		  this.obj[k].val = val;
		  this.get(k);
	  } else {
		  this.obj[k] = { k, val, l: null, r: null };
		  if (this.h) {
			  this.h.l = this.obj[k];
			  this.obj[k].r = this.h;
		  }
  
		  this.h = this.obj[k];
  
		  if (!this.t) {
			  this.t = this.obj[k];
		  }
  
		  this.c += 1;
	  }
	  
	  if (this.c > this.cap) {
		  let removed = this.t.k;
  
		  if (this.t.l) {
			  this.t.l.r = null;
			  this.t = this.t.l;
			  this.obj[removed].l = null;
		  }
  
		  delete this.obj[removed];
		  
		  this.c -= 1;
	  }
	  
  };
