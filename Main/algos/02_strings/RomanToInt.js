/*  
	🕑 O(n) -- 🛰 O(1)
	1. Roman to Integer
	Input  : (<String s>) 
	Output : (<Int>) 
*/

romanToInt(<String s>) : <Int> {
	sum = 0;
	if (s.has("IV || IX")) sum -= 2
	if (s.has("XL || XC")) sum -= 20
	if (s.has("CD || CM")) sum -= 200

	(letter of s):
		('M') += 1000;
		('D') += 500;
		('C') += 100;
		('L') += 50;  
		('X') += 10;
		('V') += 5;
		('I') += 1;
	
	∆ sum
}
