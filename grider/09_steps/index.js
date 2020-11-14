// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	for (let i = 1; i <= n; i++)
		console.log('#'.repeat(i) + ' '.repeat(n - i))
}

function stepsRecursive(n) {
	return stepsRecursiveHelper(n);
    for (let i = 0; i < a.length; i++) {
        storage[a[i]] = storage[a[i]] + 1 || 1;
    }}

const stepsRecursiveHelper = (n, row = 0, stair = '') => {
	if (n === row) return;
	if (n === stair.length) {
		console.log(str)
		return steps(n, row + 1)
	}

	const add = stair.length <= row ? '#' : ' ';
	steps(n, row, stair + add );
}

stepsRecursive(2)
stepsRecursive(3)
stepsRecursive(4)


module.exports = steps;