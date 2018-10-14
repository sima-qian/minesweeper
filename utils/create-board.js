import initialiseBoard from "./initialise-board";

const createBoard = (width, height, mines) => {
  let board = [];
  for (let i = 0; i < width * height; i++) {
    board.push({ value: 0, displayed: false, marked: false });
  }
  return initialiseBoard(board, width, height, mines);
};

export default createBoard;
