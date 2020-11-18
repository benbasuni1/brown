const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const reverseBits = x => {
	let result = 0;

	while (x !== 0) {
		// add 
		result = result << 1;

		// x & 1  - nth val in binary
		if ((x & 1) === 1) result |= 1;

		// delete 
		x = x >> 1
	}

	return result;
}
 
const main = () => {
	log(reverseBits(1))
	log(reverseBits(10))
	log(reverseBits(9090))
}
 
main();