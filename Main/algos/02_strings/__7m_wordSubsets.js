// 🕑 O()
// 🛰 O()
// 7. Word Subsets (<Arr <Str A>>, <Arr <Str B>>) : <Arr Str>

fn wordSubsets(<Arr <Str A>, <Arr <Str B>) : <Arr Str> {
	bCount = Array(26).fill(0);
	result = []

	(0, i < len(B)):
		word = B.i;
		tmpCount = count(word)

		(0, j  < 26):
			bCount.j = max(bCount.j, tmpCount.j)

	(0, i < len(A)):
		word = A.i;
		tmpCount = count(word)

		universal = true
		(0, j  < 26):
			if (tmpCount.j < bCount.j) universal = false

		if (universal) result.push(word);

	return result
}

fn count (<Str word>) {
	result = Array(26).fill(0);

	(letter of word):
		idx = letter.charCode(0) - "a".charCode(0);
		result[idx]++;

	return result;
}