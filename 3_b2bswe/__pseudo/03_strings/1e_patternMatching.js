// 🕑 O(n) 
// 🛰 O(n)
// 1. Pattern Matching
fn patternMatching(words, pattern) : bool
	result = []

	(word of words):
		if (len(word) === len(pattern)):
			if (patternCheck(pattern, word)) result.push(word)

	return result;

fn patternCheck(s1, s2) 
	s1Map, s2Map {}
	(0, i < len(s2)):
		s1, s2;

		if (!s1Map[s1]) s1Map[s1] = s2Char;
		if (!s2Map[s2]) s1Map[s2] = s1Char;

		if (s1Map[s1] !== s2Char || s2Map[s2] !== s1Char) 
			return false
	
	return true