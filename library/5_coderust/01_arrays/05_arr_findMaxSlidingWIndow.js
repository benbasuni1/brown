const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const findMaxSlidingWindow = (a, k) => {
	if (k > a.length) return [];
	
	let result = [];
	let currentMax = -Infinity;
	let i = 0;
	let j = k - 1;
  
	while (j < a.length) {
	  for (let x = i; x < k + i; x++) {
		if (a[x] > currentMax) currentMax = a[x];
	  }
	  result.push(currentMax);
	  currentMax = -Infinity;
	  i++;
	  j++;
	}
  
	return result;
  }
 
const main = () => {
	log(findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
	log(findMaxSlidingWindow([10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67], 3))
}
 
main();

  