const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const undoRedo = a => {
	let result = "";
	let undo = [];
	let redo = [];

	for (let action of a) {
		switch(action[0]) {
			case "insert": 
				result += action[1];
				undo.push('delete')
				redo = [];
				break;
			case "delete": 
				result = result.slice(0, -1);
				undo.push('insert');
				redo = [];
				break;
			case "undo": 
				let undoAction = undo.pop();
				if (undoAction === "insert")  {
					result += action[1];
					redo.push('delete')
				}
				else if (undoAction == "delete") {
					result = result.slice(0, -1);
					undo.push('insert');
				}
				break;
			case "redo": 
				if (redo.length) {
					let redoAction = redo.pop();

					if (redoAction == "insert") {
						result += action[1];
						redo.push('delete')
					}
					else if (redoAction == "delete") {
						result = result.slice(0, -1);
						undo.push('insert');
					}
				}
				break;
		}
	}

	console.log('result', result)
	return result.toString();
}

const main = () => {
	log(undoRedo([['insert', 'a'], ['insert', 'b'], ['undo']]))
}
 
main();