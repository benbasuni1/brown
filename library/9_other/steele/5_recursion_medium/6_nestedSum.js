const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const nestedEvenSum = a => {
	let sum = 0;

	for (let key in a) {
		let curr = a[key];

		if (typeof(curr) === 'number' && curr % 2 === 0) {
			sum += curr;
		} 

		if (typeof(curr) === 'object')  {
			sum += nestedEvenSum(curr);
		}
	}

	return sum;
	
}

let obj1 = {
  outer: 2,
  obj: {
	inner: 2,
	otherObj: {
	  superInner: 2,
	  notANumber: true,
	  alsoNotANumber: "yup"
	}
  }
}


let obj2 = {
	a: 2,
	b: {b: 2, bb: {b: 3, bb: {b: 2}}},
	c: {c: {c: 2}, cc: 'ball', ccc: 5},
	d: 1,
	e: {e: {e: 2}, ee: 'car'}
};

const main = () => {
	log(nestedEvenSum(obj1)); // 6
	log(nestedEvenSum(obj2)); // 10
}
 
main();