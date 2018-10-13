import cloneBoard from "./clone-board";

const addMine = (board, tile) => {
  const newBoard = cloneBoard(board);
  newBoard[tile].value = "M";
  return newBoard;
};

export default addMine;
