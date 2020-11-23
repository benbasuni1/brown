const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const binaryStrings = (s1, s2) => {
	let i = s1.length - 1;
	let j = s2.length - 1;
  
	let s = "";
	let carry = 0;
  
	while (i >= 0 || j >= 0) {
	  let sum = carry;
  
	  if (i >= 0)
		sum += parseInt(s1.charAt(i--))

	  if (j >= 0)
		sum += parseInt(s2.charAt(j--))
  
	  s += sum % 2;
	  carry = Math.floor(sum / 2);
	}
  
	if (carry) s += carry;
  
	return s.split("").reverse().join("");
}
 
const main = () => {
	log(binaryStrings("101", "11"))
}
 
main();