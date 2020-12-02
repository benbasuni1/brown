const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(1)
// 🛰 O(1)
const powerOfTwo = x => {
	return (!!x && x & (x - 1)) === 0;
}
 
const main = () => {
	log(powerOfTwo(16))
	log(powerOfTwo(17))
	log(powerOfTwo(0))
}
 
main();