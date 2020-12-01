/*  
	🕑 O(n) -- 🛰 O(n)
	9. Isomorphic Strings
	Input  : (<String s>, <String t>) 
	Output : (<Bool>) 
*/

isomorphicStrings(s, t) : <Bool> {
	if (len(s) !== len(t)): ∆ F
	map{}

	(i < len(s)):
		if (!map['1'[s.i]]) map['1'[s.i]] = t.i
		if (!map['2'[t.i]]) map['2'[t.i]] = s.i

		if (map['1'[s.i]] != t.i ||
			map['2'[t.i]] != s.i ) ∆ F
	
	∆ T
}
