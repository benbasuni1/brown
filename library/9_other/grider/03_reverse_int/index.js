// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  n = n.toString();
  let temp = '';

  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] !== 0 && n[i] !== '-') temp += n[i];
  }

  return parseInt(temp) * Math.sign(n);
}

module.exports = reverseInt;
