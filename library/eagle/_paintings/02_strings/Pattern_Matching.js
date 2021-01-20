/*  
	🕑 O(n) -- 🛰 O(n)
	1. Pattern Matching
	Input  : (<Array <str words>, <String pattern>) 
	Output : (<Bool>)
*/

patternMatch(<Array String words>, <String pattern>) : <Bool> {
	result = []

	(word of words):
		if (len(word) == len(pattern)):
			if (patternCheck(pattern, word)) +(word)

	return result;
}

patternCheck(s1, s2) : <Bool> {
	map{}
	(i < len(s2)):
		if (!map['1's1.i]) map['1's1.i] = s2Char;
		if (!map['2's2.i]) map['2's2.i] = s1Char;

		if (map['1's1.i] !== s2Char || 
			map['2's2.i] !== s1Char) 
			return false
	
	return true

}