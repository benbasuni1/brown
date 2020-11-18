// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let storage = {};
	let max = '';
	let result = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < str.length; i++) {
		let item = str[i];
		storage[item] = storage[item] + 1 || 1;
	}

	for (let key in storage) {
		if (storage[key] > max) {
			max = storage[key];
			result = key;
		}
	}

	return result;
}

maxChar('abccccd');
module.exports = maxChar;
