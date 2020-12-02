const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O()
// 🛰 O()
const someRecursive = (a, fn) => {
	if (a.length === 0) return false;
	if (fn(a[0])) return true;
	return someRecursive(a.slice(1), fn);
}

const isOdd = val => val % 2 !== 0;
 
const main = () => {
	log(someRecursive([1,2,3,4], isOdd))
	log(someRecursive([4, 6, 8, 9], isOdd))
	log(someRecursive([4,6,8], isOdd))
	log(someRecursive([4,6,8], val => val > 10))
}
 
main();