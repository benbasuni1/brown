const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
let findLowIndex = function(a, k) {
	let s = 0;
	let e = a.length - 1;
  
	while (s <= e) {
	  let m = Math.floor(s + (e - s) / 2);
	  if (a[m] === k) {
		while (a[m] === k && m >= 0) m--;
		return m + 1;
	  } else if (a[m] > k) e = m - 1;
	  else s = m + 1;
	}
  
	return -1;
};

let findHighIndex = function(a, k) {
	let s = 0;
	let e = a.length - 1;
  
	while (s <= e) {
	  let m = Math.floor(s + (e - s) / 2);
	  if (a[m] === k) {
		while (a[m] === k && m < a.length) m++;
		return m - 1;
	  } else if (a[m] > k) e = m - 1;
	  else s = m + 1;
	}
  
	return -1;
};
  
 
const main = () => {
	log(findLowIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6], 2))
	log(findHighIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6], 2))
}
 
main();