const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const lessThan20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]

const integerToWords = x => {
	if (x === 0) return "Zero";
	return helper(x).trim();
}

const helper = x => {
	if (x >= 1000000000) return (helper(Math.floor(x / 1000000000)) + " Billion " + helper(Math.floor(x % 1000000000)));
	if (x >= 1000000) return (helper(Math.floor(x / 1000000)) + " Million " + helper(Math.floor(x % 1000000)));
	if (x >= 1000) return (helper(Math.floor(x / 1000)) + " Thousand " + helper(Math.floor(x % 1000)));
	if (x >= 100) return (helper(Math.floor(x / 100)) + " Hundred " + helper((Math.floor(x % 100)))).trim()
	if (x >= 20) return (tens[Math.floor(x / 10)] + " " + helper(Math.floor(x % 10))).trim();
	return lessThan20[x];
}
 
const main = () => {
	// log(integerToWords(12))
	// log(integerToWords(13))
	// log(integerToWords(292))
	// log(integerToWords(1291))
	// log(integerToWords(123))
	// log(integerToWords(12345))
	// log(integerToWords(2943832))
	// log(integerToWords(1234567891))
	log(integerToWords(50868))
	log(integerToWords(100000))
}

main();