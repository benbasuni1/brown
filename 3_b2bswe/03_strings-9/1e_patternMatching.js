const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const patternMatching = (words, pattern) => {
	let result = [];

	for (let word of words) {
		if (word.length === pattern.length) 
			if (patternCheck(pattern, word)) result.push(word);
	}

	return result;
}

const patternCheck = (word, pattern) => {
	let wordMap = {};
	let patternMap = {};

	for (let i = 0; i < pattern.length; i++) {
		let wordLetter = word[i];
		let patternLetter = pattern[i];

		if (!wordMap[wordLetter]) wordMap[wordLetter] = patternLetter;
		if (!patternMap[patternLetter]) patternMap[patternLetter] = wordLetter;

		if (wordMap[wordLetter] !== patternLetter ||
		    patternMap[patternLetter] !== wordLetter) return false;
	}

	return true;
}
 
const main = () => {
	// log(patternMatching(["aa", "bb"], "cc"))
	// log(patternMatching(["aac", "bbc", "bcb", "yzy"], "ghg"))
	// log(patternMatching(["aa", "bb"], "xy"))
	// log(patternMatching(["aab", "ccc"], "xxx"))
	log(patternMatching(["abc","cde","zzz"],"aaa"))
}
 
main();