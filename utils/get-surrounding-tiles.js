const getSurroundingTiles = (tile, boardWidth) => {
  if (tile % boardWidth == 0) {
    return [
      tile - boardWidth,
      tile - (boardWidth - 1),
      tile + 1,
      tile + boardWidth,
      tile + (boardWidth + 1)
    ];
  } else if ((tile + 1) % boardWidth == 0) {
    return [
      tile - (boardWidth + 1),
      tile - boardWidth,
      tile - 1,
      tile + (boardWidth - 1),
      tile + boardWidth
    ];
  } else {
    return [
      tile - (boardWidth + 1),
      tile - boardWidth,
      tile - (boardWidth - 1),
      tile - 1,
      tile + 1,
      tile + (boardWidth - 1),
      tile + boardWidth,
      tile + (boardWidth + 1)
    ];
  }
};

export default getSurroundingTiles;
