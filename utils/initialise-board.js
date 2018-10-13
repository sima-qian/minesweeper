import addMine from "./add-mine";
import cloneBoard from "./clone-board";
import getRandomInt from "./random-number";
import getSurroundingTiles from "./get-surrounding-tiles";

const initialiseBoard = (board, width, height, mines) => {
  let initialisedBoard = cloneBoard(board);
  while (mines > 0) {
    let tileId = getRandomInt(width * height);
    if (initialisedBoard[tileId].value !== "M") {
      mines--;
      initialisedBoard = addMine(initialisedBoard, tileId);
      getSurroundingTiles(tileId, width).forEach(tile => {
        if (tile > 0 && tile < width * height) {
          if (initialisedBoard[tile].value !== "M") {
            initialisedBoard[tile].value += 1;
          }
        }
      });
    }
  }
  return initialisedBoard;
};

export default initialiseBoard;
