// ui.rj.um.ij
// 🕑 O(n)
// 🛰 O(n)
// 9. Longest Subsequence(<Str s>) : int

fn longestSubsequence(<Str s>) : int {
	i, j = 0
	maxCount = 0
	map{}

	while (j < len(s)):
		if (map.s[j]) i = max(i, map.s[j])
		map.s[j] = j + 1
		maxCount = max(j - i + 1, maxCount)
		j++

	return maxCount
}