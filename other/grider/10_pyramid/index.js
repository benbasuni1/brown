// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples

//   pyramid(1) - 1
//       '#'     - 1 - 0
//   pyramid(2) - 3
//       ' # '   - 1 - 2
//       '###'   - 3 - 0
//   pyramid(3) - 5
//       '  #  ' - 1 - 4
//       ' ### ' - 3 - 2
//       '#####' - 5 - 0
//   pyramid(4) - 7
//       '   #   ' - 1 - 6 (4 - 1) * 2
//       '  ###  ' - 3 - 4 (4 - 2) * 2
//       ' ##### ' - 5 - 2 (4 - 3) * 2
//       '#######' - 7 - 0 (4 - 4) * 2

function pyramid(n) {
	let i = 1;
	let sharps = 1;

	while (i <= n) {
		let spaces = (n - i) * 2;
		console.log(' '.repeat(spaces / 2) + '#'.repeat(sharps) + ' '.repeat(spaces / 2));
		i++;
		sharps += 2;
	}
}

function pyramidRecurse(n) {
	return pyramidRecurseHelper(n);
}

const pyramidRecurseHelper = (n, row = 0, stairs = '') => {
	if (n === row) return;
	if (stairs.length ===  (n * 2) - 1) {
		console.log(stairs);
		return pyramidRecurseHelper(n, row + 1);
	}

	const mid = Math.floor((2 * n - 1) / 2);
	let add = (mid - row <= stairs.length && mid + row >= stairs.length) ? '#' : ' ';
	pyramidRecurseHelper(n, row, stairs + add);
}

pyramidRecurse(5);

module.exports = pyramid;
