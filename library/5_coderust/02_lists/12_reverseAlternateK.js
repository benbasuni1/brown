const { List, Helper } = require('./implementation');

// 🕑 O()
// 🛰 O()
const reverseAlternateNodesK = (list, k) => {
	let tail = list;
	let head = list;
	let curr = list;
	let dummy = new List(-1);

	while (curr) {
		for (let i = 1; i < k; i++) {
			head = head.next;
			reverse(tail, head);
			curr = curr.next;
		}
	}
}
	
const reverse = (head, tail) => {
	
	// let curr = list;
	// let prev = null;

	// while (k >= 0 && curr) {
	// 	let temp = curr.next;
	// 	curr.next = prev;
	// 	prev = curr;
	// 	curr = temp;
	// 	k--;
	// }

	// let tailPrev = prev;
	// while (tailPrev.next) tailPrev = tailPrev.next;
	// tailPrev.next = curr;

	// return prev;
}

const main = () => {
	let a = Helper.createLinkedList([1, 2, 3, 4, 5])
	reverseAlternateNodesK(a, 2);
}

main()