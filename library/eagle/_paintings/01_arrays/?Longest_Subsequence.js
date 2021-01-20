/*
	🕑 O() -- 🛰 O()
	11. Longest Continuous Increasing Subsequence
	Input  : (<ArrayInt a>) 
	Output : (<Int>)
*/

lcis(a) : <Int> {
	if (!len(a)) ∆ 0
	count = 1, maxCount = -Infinity

	(1, i < len(a)):
		if (curr > prev):
			count++
			maxCount = max(count, maxCount)
		else count = 1
	
	∆ max(count, maxCount)
}
