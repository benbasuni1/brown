const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(n)
function riverSizes(matrix) {
	const sizes = [];
	const visited = matrix.map(row => row.map(val => false));
	
	for (let x = 0; x < matrix.length; x++) {
		for (let y = 0; y < matrix[x].length; y++) {
			if (visited[x][y]) continue;
			fh(x, y, matrix, visited, sizes);
		}
	}
	
	return sizes;
}

const fh = (x, y, matrix, visited, sizes) => {
	let currRiverSize = 0;
	const nodesToExplore = [[x, y]];
	
	while (nodesToExplore.length) {
		const curr = nodesToExplore.shift();
		x = curr[0];
		y = curr[1];
		if (visited[x][y]) continue;
		visited[x][y] = true;
		if (matrix[x][y] === 0) continue;
		
		currRiverSize++;
		const unvisitedNeighbors = getUnvisited(x, y, matrix, visited);
		for (const neighbor of unvisitedNeighbors) 
			nodesToExplore.unshift(neighbor);
	}
	
	if (currRiverSize > 0) sizes.push(currRiverSize)
}

const getUnvisited = (x, y, matrix, visited) => {
	const unvisited = [];

	if (x > 0 && !visited[x - 1][y]) unvisited.push([x - 1, y]); // left
	if (y > 0 && !visited[x][y - 1]) unvisited.push([x, y - 1]); // down
	if (x < matrix.length - 1 && !visited[x + 1][y]) unvisited.push([x + 1, y]); // right
	if (y < matrix[0].length - 1 && !visited[x][y + 1]) unvisited.push([x, y + 1]); // up
	
	return unvisited;
}

const main = () => {
	log(riverSizes([
		[1, 0, 0, 1, 0],
		[1, 0, 1, 0, 0],
		[0, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 1, 0]
	  ]))
}
 
main();