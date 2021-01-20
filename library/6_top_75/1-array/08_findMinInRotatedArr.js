const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const findMin = a => {
	let s = 0;
	let e = a.length - 1;
	let r = a[a.length - 1];
	
	while (s <= e) {
	  let m = Math.floor(s + (e - s) / 2);
	  
	  if (a[m] > r) s = m + 1;
	  else if (a[m] <= r && (a[m - 1] > r || m === 0)) return a[m];
	  else e = m - 1;
	}
	
	return -1;
};

const main = () => {
	log(findMin([4,5,6,7,1,2,3]))
}

main();