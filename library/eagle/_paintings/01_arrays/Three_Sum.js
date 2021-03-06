/*  
	🕑 O(n^2) -- 🛰 O(n)
	3. Three Sum
	Input  : (<ArrayInt> a) 
	Output : (<Array.ArrayInt>)
*/

threeSum(a) : <Array.ArrayInt> {
	sort(a)
	result = []

	(i < len(a) - 2):
		if (a.i == a.i - 1) continue
		left, right;
		while (left < right):
			sum = a.i + a.left + a.right
			if (sum == 0):
				+(a.i, a.left, a.right);
				left++; right--; 
				while(a.left == a.left - 1): left++
				while(a.right == a.right + 1): right--
			elif (sum < 0) left++;
			else right--;

	∆ result

}
