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
	s1Map, s2Map {}
	(i < len(s2)):
		if (!s1Map[s1.i]) s1Map[s1.i] = s2Char;
		if (!s2Map[s2.i]) s2Map[s2.i] = s1Char;

		if (s1Map[s1.i] !== s2Char || 
			s2Map[s2.i] !== s1Char) 
			return false
	
	return true

}