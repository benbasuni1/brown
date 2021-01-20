/*  
	🕑 O(n) -- 🛰 O(1)
	Count Primes
	Input  : (<Int n>) 
	Output : (<ArrayInt>) 
*/

countPrimes(n) : <ArrayInt> {
	isPrime = Array(n).fill(true).[01].false
	res[]

	(i <= n):
		if (isPrime.i):
			(i + i; j <= n; j += i):
				isPrime.j = false
			res+i
	∆ res
}
