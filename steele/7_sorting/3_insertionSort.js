const { helper: utils, log, line } = require('../../interview-camp/__common/utils');
 
// 🕑 O()
// 🛰 O()
const insertionSort = a => {
    for(let i = 1; i < a.length; i++){
		let curr = a[i];

        for(let j = i - 1; j >= 0 && a[j] > curr; j--) {
            a[j + 1] = a[j]
		}

        a[j + 1] = curr;
    }
    return a;
}
 
const main = () => {
	log(insertionSort([3, 7, 1, 2, 6, 9, 10, 3, 2]))
}
 
main();