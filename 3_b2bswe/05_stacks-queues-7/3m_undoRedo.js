const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const undoRedo = a => {
	let result = "";
	let undo = [];
	let redo = [];

	for (let action of a) {
		switch(action[0]) {
			case "INSERT": 
				performInsert(action[1], undo, result)
				redo = [];
				break;
			case "DELETE": 
				performDelete(undo, result);
				redo = [];
				break;
			case "UNDO": 
				let undoAction = undo.pop();

				if (undoAction.type === "INSERT")  
					performInsert(undoAction.char, redo, result);
				else if (undoAction.type == "DELETE")
					performDelete(redo, result);
				break;

			case "REDO": 
				if (redo.length) {
					let redoAction = redo.pop();

					if (redoAction.type == "INSERT")
						performInsert(redoAction.char, undo, result);
					else if (redoAction.type == "DELETE")
						performDelete(undo, result);
				}
				break;
		}
	}

	return result;
}
 
const main = () => {
	log(undoRedo())
}
 
main();
/*
public String performEditorActions(String[][] actions) {
    StringBuilder sb = new StringBuilder();

    Stack<Action> undo = new Stack<>(); // Track the most recent actions that we want to undo
    Stack<Action> redo = new Stack<>();

    for (String[] a : actions) {
      switch (a[0]) {
        case "INSERT":
          performInsertChar(a[1].charAt(0), undo, sb);
          redo.clear();

          break;

        case "DELETE":
          performDeleteChar(undo, sb);
          redo.clear();

          break;

        case "UNDO":
          Action undoAction = undo.pop();

          if (undoAction.type == ActionType.INSERT) {
            performInsertChar(undoAction.character, redo, sb);
          } else if (undoAction.type == ActionType.DELETE) {
            performDeleteChar(redo, sb);
          }

          break;

        case "REDO":
          if (redo.size() != 0) {
            Action redoAction = redo.pop();

            if (redoAction.type == ActionType.INSERT) {
              performInsertChar(redoAction.character, undo, sb);
            } else if (redoAction.type == ActionType.DELETE) {
              performDeleteChar(undo, sb);
            }
          }

          break;
      }
    }

	return sb.toString();

private void performInsertChar(Character c, Stack<Action> destinationStack, StringBuilder sb) {
    sb.append(c);

    Action oppositeAction = new Action(ActionType.DELETE);
    destinationStack.push(oppositeAction);
  }

  private void performDeleteChar(Stack<Action> destinationStack, StringBuilder sb) {
    int indexToRemove = sb.length() - 1;
    char character = sb.charAt(indexToRemove);

    sb.deleteCharAt(indexToRemove);

    Action oppositeAction = new Action(character, ActionType.INSERT);
    destinationStack.push(oppositeAction);
  }
	*/