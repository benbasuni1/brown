const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const nQueens = n => {
    let result = [];
	let board = createBoard(n);

    findQueens(board, n, result, 0);
    return result;
};

const findQueens = (board, n, result, col) => {
    if (col === board.length) {
        result.push([...board]);
        return;
    }
    
    for(let i = 0; i < n; i++) {        
        if (isValid(board, n, i, col)) {
            board[i] = replaceAt(board[i], col, "Q");
            findQueens(board, n, result, col + 1);
            board[i] = replaceAt(board[i], col, ".");
        }
    }
}

const isValid = (board, n, row, col) => {
    // check cols
    for (let i = 0; i < col; i++) {
        if (board[row][i] == "Q") return false;
    }
    
    // check upper left diag
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == "Q") return false;
    }
    
    // check lower left diag
    for (let i = row, j = col; i < n && j >= 0; i++, j--) {
        if (board[i][j] == "Q") return false;
    } 
    
    return true;
}

const createBoard = n => {
    let board = Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = "";
        for(let j = 0; j < n; j++) {
            board[i] += "." 
        }
    }

	return board;
}

const replaceAt = (s, index, c) => s.slice(0, index) + c + s.slice(index + 1, s.length);
	
const main = () => {
	log(nQueens(4))
}
 
main();