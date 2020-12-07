const { List, Helper } = require('./implementation');

// 🕑 O(n)
// 🛰 O(1)
const findKthNode = (list, k) => {
	let leader = list;
	let follower = list;

	while (k) {
		leader = leader.next;
		k--;
	}

	if (k > 0) return null;

	while (leader) {
		leader = leader.next;
		follower = follower.next;
	}

	console.log('follower.data', follower.data)
	return follower.data;
}

const main = () => {
	let a = Helper.createLinkedList([7, 14, 21, 28, 35, 42])
	findKthNode(a, 3);
}

main()