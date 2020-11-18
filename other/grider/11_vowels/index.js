// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let count = 0;

	str = str.replace('/[^\w]/g', '').toLowerCase();

	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' ||
			str[i] === 'o' || str[i] === 'u') count++;
	}

	return count;
}

module.exports = vowels;
