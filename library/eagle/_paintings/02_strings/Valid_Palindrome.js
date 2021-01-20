/*  
	🕑 O(n) -- 🛰 O(n)
	5. Valid Palindrome
	Input  : (<String s>) 
	Output : (<bool>)
*/

validPalindrome(<String s>) : <bool> {
	s = azAZ.lower.trim(s);
	i = 0; j = len(s) - 1

	while (i <= j):
		if (s.i !== s.j) return false
		i++; j--;
	
	return true 
}