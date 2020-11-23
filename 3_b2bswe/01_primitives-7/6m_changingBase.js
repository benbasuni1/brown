const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const changingBase = (x, b1, b2) => {
	const isNegative = x.startsWith("-");

	const start = isNegative ? 1 : 0;
	const maxPower = x.length - 1;

	let numBase10 = 0;

	for (let i = start; i < x.length; i++) {
		const char = x[i];

		const isPlaceADigit = /^\d+$/.test(char);
		const valPlace = isPlaceADigit ? 
			parseInt(char) : 
			char.charCodeAt(0) - 'A'.charCodeAt(0) + 10;

		const positionPowerWeight = maxPower - i;
		numBase10 += Math.floor(valPlace * Math.pow(b1, positionPowerWeight));

	}
	if (numBase10 == 0) return "0";
	else return (isNegative ? "-" : "") + base10ToNewBase(numBase10, b2);
}

const base10ToNewBase = (numberUnderBase10, base) => {
	if (numberUnderBase10 == 0) return "";

	// lsd => "least significant digit"
	let lsdAsChar;
	const lsdUnderFinalBase = numberUnderBase10 % base;

	const needsHexConversion = lsdUnderFinalBase >= 10;
	if (needsHexConversion) {
		let asciiValue = ('A'.charCodeAt(0) + lsdUnderFinalBase - 10)
		lsdAsChar = String.fromCharCode(asciiValue)
	} else {
		lsdAsChar = lsdUnderFinalBase.toString()
	}

	const base10NumberWithoutLsd = Math.floor(numberUnderBase10 / base);
	const everythingElseToOurLeft = base10ToNewBase(base10NumberWithoutLsd, base);

	return everythingElseToOurLeft + lsdAsChar;
}
 
const main = () => {
	log(changingBase("12", 10, 2))
	log(changingBase("123", 4, 10))
}
 
main();
