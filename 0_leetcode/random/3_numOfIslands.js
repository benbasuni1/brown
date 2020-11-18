const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const numOfIslands = a => {
	let count = 0;

	for (let x = 0; x < a.length; x++) {
		for (let y = 0; y < a[x].length; y++) {
			if (a[x][y] === 1) {
				count++;
				dfs(x, y, a);
			}
		}
	}

	return count;
}

const dfs = (x, y, a) => {
	if (a[x][y] === 1) a[x][y] = 0;
	else return;

	if (y > 0) dfs(x, y + 1, a)
	if (x < a.length - 1) dfs(x + 1, y, a)
	if (y < a[0].length - 1) dfs(x, y - 1, a)
	if (x > 0) dfs(x - 1, y, a)
}
 
const main = () => {
	log(numOfIslands([
		[1, 0, 0, 1, 0],
		[1, 0, 1, 0, 0],
		[0, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 1, 0]
	]))
}
 
main();