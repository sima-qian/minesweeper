import getSurroundingTiles from "./get-surrounding-tiles";

const revealZeroNeighbours = (tile, board, width, height) => {
  const surroundingTiles = getSurroundingTiles(tile, width);
  surroundingTiles.forEach(surroundingTile => {
    if (surroundingTile >= 0 && surroundingTile < width * height) {
      if (!board[surroundingTile].displayed) {
        board[surroundingTile].displayed = true;
        board[surroundingTile].marked = false;
        if (board[surroundingTile].value == 0) {
          revealZeroNeighbours(surroundingTile, board, width, height);
        }
      }
    }
  });
  return board;
};

export default revealZeroNeighbours;
