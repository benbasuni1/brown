
/*  
	🕑 O(log n) -- 🛰 O(1)
	3. Factorial Trailing Zeroes
	Input  : (<Int n>) 
	Output : (<Int>) 
*/

factorialTrailingZeroes(n) : <Int> {
	res = 0
	(5; i <= n; i *= 5) res += (n / i)

	∆ res
}