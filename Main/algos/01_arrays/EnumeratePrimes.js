/*  
	🕑 O(n) -- 🛰 O(n)
	2. Enumerate Primes
	Input  : (<int n>) 
	Output : (<Arr>)
*/

enumeratePrimes(<int n>) : <Array int> {
	if (n <= 1) return []

	result = []
	isPrime = Array(n).true.[01].false

	(i < n):
		if (isPrime.i):
			(j = i + i; j < n; j+=i) isPrime.j = false
			result.push(i)
		
	∆ result;
}