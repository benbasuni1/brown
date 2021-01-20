/*  
	🕑 O(n) -- 🛰 O(n)
	2. Longest Palindrome String
	Input  : (<String s>) 
	Output : (<int>)
*/

longestPalindromeString(<String s>) : <int> {
	map{}, count = 0

	(let letter of s):
		if (!map[letter]) 
			map[letter] = 1
		else 
			delete map[letter]; count++

	return keys(map) ? (count*2) + 1 : count;
 }
