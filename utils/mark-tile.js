import cloneBoard from "./clone-board";

const markTile = (tile, prevState) => {
  const board = cloneBoard(prevState.board);
  board[tile].marked = !board[tile].marked;
  return {
    board
  };
};

export default markTile;
