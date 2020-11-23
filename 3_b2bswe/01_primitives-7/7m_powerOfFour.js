const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(1)
// 🛰 O(1)
const powerOfFour = x => {
	const alternatingOddBitMask = 0x55555555; // 1010101010101010101010101010101

	const isNonZero = x !== 0;
	const hasSingleLeadingOneBit = (x & (input - 1)) === 0;
	const hasOnlyOddPositionedBits = (x & alternatingOddBitMask) === input;
  
	return isNonZero && hasSingleLeadingOneBit && hasOnlyOddPositionedBits;
}
 
const main = () => {
	log(powerOfFour())
}
 
main();