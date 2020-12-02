/*  
	🕑 O(n) -- 🛰 O(1)
	1. Maximum Subarray
	Input  : (<ArrayInt a>) 
	Output : (<Int>) 
*/

maximumSubarray(<ArrayInt a>) : <Int> {
	temp = result = a.0 

	(1; i < len(a)):
		temp = max(a.i, a.i + temp)
		result = max(temp, result)

	∆ result
}
