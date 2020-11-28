const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const canPlaceFlowers = (a, n) => {
	let zeroes = 1;
	for (let i = 2; i < a.length - 1; i++) {
		zeroes++;
	}

	if ((zeroes - 1) / 2 >= n) return true;

	return false;
}
 
const main = () => {
	log(canPlaceFlowers([1,0,0,0,1], 1))
	log(canPlaceFlowers([1,0,0,0,1], 2))
}
 
main();

/*
	n : zeroes
	1 : 3
	2 : 5
	3 : 7
*/