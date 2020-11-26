const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const wordSubsets = (A, B) => {
	const bCount = Array(26).fill(0);
  
	// Collecting the constraints into a character mapping
	for (let i = 0; i < B.length; i++) {
	  const word = B[i];
	  const tmpCount = count(word);
  
	  for (let j = 0; j < 26; j++) {
		bCount[j] = Math.max(bCount[j], tmpCount[j]);
	  }
	}
  
	// Testing each character in A
	const output = [];
	for (let i = 0; i < A.length; i++) {
	  const word = A[i];
	  const tmpCount = count(word);
  
	  let universal = true;
	  for (let j = 0; j < 26; j++) {
		if (tmpCount[j] < bCount[j]) universal = false;
	  }
  
	  if (universal) output.push(word);
	}
  
	return output;
  }
  
  const count = (word) => {
	const output = Array(26).fill(0);
  
	for (let letter of word) {
	  const idx = letter.charCodeAt(0) - "a".charCodeAt(0);
	  output[idx] += 1;
	}
  
	return output;
  }
const main = () => {
	log(wordSubsets(["padding", "css", "randomcs"], ["cs", "c"]))
}
 
main();