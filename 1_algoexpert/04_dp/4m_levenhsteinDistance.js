const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const levenShteinDistance = (s1, s2) => {
	const edits = [];
	for (let i = 0; i <= s2.length; i++) {
		const row = [];
		for (let j = 0; j <= s1.length; j++) row.push(j);
		row[0] = i;
		edits.push(row);
	}

	for (let i = 1; i <= s2.length; i++) {
		for (let j = 1; j <= s1.length; j++) {
			if (s1[i - 1] === s2[j - 1]) edits[i][j] = edits[i - 1][j - 1];
			else edits[i][j] = 1 + Math.min(edits[i - 1][j], edits[i][j - 1], edits[i - 1][j - 1]);
		}
	}

	return edits[s2.length][s1.length];
}
 
const main = () => {
	log(levenShteinDistance("abc", "yabd"))
}
 
main();