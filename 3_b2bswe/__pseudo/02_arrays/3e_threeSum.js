// 🕑 O(n^2)
// 🛰 O(n)
// 3. Three Sum

sort(a)
result = []

(0; i < len(a) - 2)
  left, right;
  while (left < right):
	sum += a.i + a.left + a.right
    if (sum === 0):
      result.push(a.i, a.left, a.right)
      left++; right--; 
    else if (sum < 0) left++
    else right--

return result