const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const findMinDiff = a => {
	utils.start(a);
	let seen = Array(24 * 60).fill(false);

	for (time of a) {
		let n = timeToInt(time);
		if (seen[n]) return 0;

		seen[n] = true;
	}

	let prev = -1;
	let minDiff = (24 * 60) + 1;
	let first = -1;

	for (let i = 0; i < seen.length; i++) {
		if (seen[i]) {
			if (prev !== -1) minDiff = Math.min(minDiff, i - prev);
			else first = i;

			prev = i;
		}
	}

	minDiff = Math.min(minDiff, first + 1440 - prev);

	return minDiff;
}

const timeToInt = time => {
	let hours = time.substring(0, 2);
	let minutes = time.substring(3, 5);

	return parseInt(hours) * 60 + parseInt(minutes);
}
 
const main = () => {
	log(findMinDiff(["00:03", "23:59", "12:03"]))
}
 
main();