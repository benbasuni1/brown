/*  
	🕑 O(n) -- 🛰 O(1)
	4. Happy Number
	Input  : (<Int n>) 
	Output : (<Bool>) 
*/

happyNumber(n) : <Int> {
	slow = fast = n;
	while (1):
		slow = fh(slow)
		fast = fh(fh(fast))

		if (slow == fast): ∆ slow == 1 ? true : false
}

fh(n) : <Int> {
	sum = 0
	while (n != 0): 
		sum += (n % 10) * (n % 10)
		n /= 10
	∆ sum
}


