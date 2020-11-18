const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const isPalindrome = a => {
	if (a.length <= 1) return true;
	if (a[0] === a[a.length - 1])
		return isPalindrome(a.substring(1, a.length - 1));

	return false;
}
 
const main = () => {
	log(isPalindrome('awesome'))
	log(isPalindrome('foobar'))
	log(isPalindrome('tacocat'))
	log(isPalindrome('amanaplanacanalpanama'))
	log(isPalindrome('amanaplanacanalpandemonium'))
}
 
main();