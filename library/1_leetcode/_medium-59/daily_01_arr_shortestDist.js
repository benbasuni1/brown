const { linkedListHelper: utils, log } = require('./__common/utils');
const { arrayToList } = require('./__common/data_structures/2e_linkedList');
const { LinkedListNode } = require('./__common/data_structures/0_node');

// 🕑 O(n)
// 🛰 O(1)
const shortestDist = (a, s1, s2) => {
	let res = Infinity;
	let index = -1;
	for (let i = 0; i < a.length; i++) {
		if (a[i] === s1 || a[i] === s2) {
			if (index !== -1 && a[index] !== a[i])
				res = Math.min(i - index, res);
			index = i;
		}
	}

	return res;
}

const main = () => {
	console.log(shortestDist(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"))
}

main()