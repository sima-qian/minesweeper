const board = [];

const data = {
  width: 10,
  height: 10,
  board,
  mines: 12
};

for (let i = 0; i < data.width * data.height; i++) {
  board.push({ value: 0, displayed: false, marked: false });
}

export default data;
