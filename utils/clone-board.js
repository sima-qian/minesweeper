const cloneBoard = board => {
  return board.map(tile => ({
    value: tile.value,
    displayed: tile.displayed,
    marked: tile.marked
  }));
};

export default cloneBoard;
