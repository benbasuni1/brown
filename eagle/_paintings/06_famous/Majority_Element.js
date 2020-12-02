/*  
	🕑 O(n) -- 🛰 O(1)
	2. Majority Element
	Input  : (<ArrayInt a>) 
	Output : (<Int>) 
*/

majorityElement(a) : <Int> {
	count = 1
	major = a.0

	(1; i < len(a)):
		if (count == 0):
			major = a.i
			count++; 
		elif  (a.i == major) count++
		else count--

	∆ major
}