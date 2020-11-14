const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n * s)
// 🛰 O(n)
const verifyingAnAlienDictionary = (a, dictionary) => {
	let storage = {};

	for (let i = 0; i < dictionary.length; i++) {
		storage[dictionary[i].charCodeAt()] = i;
	}
	
	for (let i = 1; i < a.length; i++) {
		if (!checkWorks(a[i - 1], a[i], storage)) return false;
	}

	return true;
}

const checkWorks = (a, b, storage) => {
	for (let i = 0; i < Math.min(a.length, b.length); i++) {
		let c1 = storage[a[i].charCodeAt()];
		let c2 = storage[b[i].charCodeAt()];

		if (c1 === c2) continue;
		else if (c1 > c2) return false;
		else return true;
	}

	return a.length <= b.length;
}

const main = () => {
	log(verifyingAnAlienDictionary(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))
	log(verifyingAnAlienDictionary(["word","world","row"], "worldabcefghijkmnpqstuvxyz"))
}
 
main(); 