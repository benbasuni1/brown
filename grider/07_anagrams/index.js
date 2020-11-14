// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(a, b) {
	a = a.replace(/[^\w]/g, "").toLowerCase();
	b = b.replace(/[^\w]/g, "").toLowerCase();

	if (a.length !== b.length) return false;
	
	let storage = {};

	for (let i = 0; i < a.length; i++) {
		storage[a[i]] = storage[a[i]] + 1 || 1;
	}

	for (let j = 0; j < b.length; j++) {
		if (!storage[b[j]]) return false;
		else {
			storage[b[j]]--;
			if (storage[b[j]] === 0) delete storage[b[j]];
		}
	}

	return Object.keys(storage).length === 0;
}

console.log(anagrams('rail safety', 'fairy tales'))
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))
console.log(anagrams('Hi there', 'Bye there'))

module.exports = anagrams;
