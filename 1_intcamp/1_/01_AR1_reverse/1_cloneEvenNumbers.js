const { getLastNumber } = require('../../__common/utils');
const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(1)
const cloneEvenNumbers = a => {
	let i = getLastNumber(a);
	let e = a.length;
	
	if (a === null || a.length <= 0) return null;

	while (e >= 0) {
		if (a[i] % 2 === 0) a[--e] = a[i];
		a[--e] = a[i];
		i--;
	}

	return a;
}
 
const main = () => {
	cloneEvenNumbers([1, 2, 5, 6, 8, -1, -1, -1]);
}
 
main();