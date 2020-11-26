// 🕑 O(n)
// 🛰 O(1)
// 5. Valid Palindrome(s): bool

fn validPalindrome(s) : bool {
	s = charOnly.lowerCase.trim(s);
	i = 0; j = len(s) - 1

	while (i <= j):
		if (s.i !== s.j) return false
		i++; j--;
	
	return true 
}