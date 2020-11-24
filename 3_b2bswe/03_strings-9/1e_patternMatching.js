const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const patternMatching = (words, pattern) => {
	utils.start(words, pattern);
	let result = [];

	for (let word of words) {
		if (word.length === pattern.length) 
			if (patternCheck(pattern, word)) result.push(word);
	}

	return result;
}

const patternCheck = (s1, s2) => {
	let s1Map = {};
	let s2Map = {};

	for (let i = 0; i < s2.length; i++) {
		let s1Char = s1[i];
		let s2Char = s2[i];

		// add 2 way relationship to both maps
		if (!s1Map[s1Char]) s1Map[s1Char] = s2Char;
		if (!s2Map[s2Char]) s2Map[s2Char] = s1Char;

		console.log(s1, 's1Map', s1Map)
		console.log(s2, 's2Map', s2Map)

		// check if they are the same
		if (s1Map[s1Char] !== s2Char || s2Map[s2Char] !== s1Char) return false;
		line();
	}


	return true;
}
 
const main = () => {
	// log(patternMatching(["aa", "bb"], "cc"))
	// log(patternMatching(["aac", "bbc", "bcb", "yzy"], "ghg"))
	// log(patternMatching(["aa", "bb"], "xy"))
	log(patternMatching(["aab", "ccc"], "xxx"))
	// log(patternMatching(["abc","cde","zzz"],"aaa"))
}
 
main();