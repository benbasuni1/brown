const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const minSubarrayLen = (a, x) => {
	let sum = 0;
	let i = 0;
	let j = 0;
	let minLen = Infinity;
   
	while (i < a.length) {
		if(sum < x && j < a.length) {
			sum += a[j];
			j++;
		} else if (sum >= x) {
			minLen = Math.min(minLen, j - i);
			sum -= a[i];
			i++;
		} else break;
	}
   
	return minLen === Infinity ? 0 : minLen;
  }

 
const main = () => {
	log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7));
	log(minSubarrayLen([2, 1, 6, 5, 4], 9));
	log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
	log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
	log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
	log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11));
	log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
}
 
main();