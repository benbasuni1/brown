/*  
	🕑 O(n) -- 🛰 O(1)
	10. Valid Anagram
	Input  : (<String s>, <String t>) 
	Output : (<Bool>) 
*/

validAnagram(s, t) : <Bool> {
	if (len(s) != len(t)): ∆ F
	map{}

	(letr of s): 
		map[letr] = map[letr] + 1 || 1

	(letr2 of t):
		(!map[letr2]) ∆ F
		map[letr2]--

	∆ T
}