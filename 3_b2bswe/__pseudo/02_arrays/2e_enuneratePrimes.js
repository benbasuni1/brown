// 🕑 O(n)
// 🛰 O(n)
// 2. Enumerate Primes

if n <= 1 return []

result = []

isPrime = Array(n).true
isPrime[0,1] = false

(0; i < n)
	if (isPrime.i) 
		(j = i + i; j < n; j+=i)
			isPrime.j = false

	result.push(i)
	
return result
