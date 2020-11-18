const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const find3LargestSum = a => {
	let res = [null, null, null];
	
	for (const num of a) {
		updateLargest(res, num);
	}
	
	return res;
}

const updateLargest = (res, num) => {
	if (res[2] === null || num > res[2]) 
		update(res, num, 2);
	else if (res[1] === null || num > res[1])
		update(res, num, 1);
	else if (res[0] === null || num > res[0])
		update(res, num, 0)
}

const update = (res, num, idx) => {
	for (let i = 0; i <= idx; i++) {
		if (i === idx) res[i] = num;
		else res[i] = res[i + 1];
	}
}

const main = () => {
	log(find3LargestSum([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))
	log(find3LargestSum([7, 7, 7]))
}
 
main();