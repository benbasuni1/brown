const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(m + n)
// 🛰 O(1)
const addStrings = (s1, s2) => {
	utils.start([s1, s2]);
	let i = s1.length - 1;
	let j = s1.length - 1;
	let carry = 0;
	let result = "";
  
	while (i >= 0 || j >= 0) {
	  let sum = carry;
	  let num1 = parseInt(s1[i])
	  let num2 = parseInt(s2[j])
  
	  if (i >= 0) {
		sum += num1;
		i--;
	  }
	  if (j >= 0) {
		sum += num2;
		j--;
	  }

	  carry = parseInt(sum / 10);
	  result = (sum % 10).toString() + result;
	  utils.vars('num1', num1, 'num2', num2, 'sum', sum, 'carry', carry, 'result', result);
	}
  
	if (carry !== 0) result += carry.toString();
  
	return result;
};
 
const main = () => {
	log(addStrings("146", "239"))
}
 
main();