width; /* eslint-disable */

import addMine from "../utils/add-mine";
import createBoard from "../utils/create-board";
import getRandomInt from "../utils/random-number";
import getSurroundingTiles from "../utils/get-surrounding-tiles";
import initialiseBoard from "../utils/initialise-board";
import markTile from "../utils/mark-tile";

const width = 10;
const height = 10;
const board = [];
for (let i = 0; i < width * height; i++) {
  board.push({ value: 0, displayed: false, marked: false });
}
const mines = 12;

describe("Testing addMine()", () => {
  const tileId = 0;
  test("addMine() should return array", () => {
    expect(addMine(board, tileId)).toBeInstanceOf(Array);
  });
  test("addMine() should return populated array", () => {
    expect(addMine(board, tileId).length).toBeGreaterThan(0);
  });
  test("addMine() should not alter original array", () => {
    expect(addMine(board, tileId)[tileId].value).not.toBe(board[tileId].value);
  });
  test("addMine() should return array with mine at given tile", () => {
    expect(addMine(board, tileId)[tileId].value).toBe("M");
    expect(addMine(board, tileId)[tileId].displayed).toBeFalsy();
    expect(addMine(board, tileId)[tileId].marked).toBeFalsy();
  });
  test("addMine() should not alter value of any other tile", () => {
    for (let i = 1; i < 100; i++) {
      expect(addMine(board, tileId)[i].value).toBe(0);
    }
  });
  test("addMine() should not alter properties of any other tile", () => {
    for (let i = 1; i < 100; i++) {
      expect(addMine(board, tileId)[i].displayed).toBeFalsy();
      expect(addMine(board, tileId)[i].marked).toBeFalsy();
    }
  });
});

describe("Testing createBoard()", () => {
  test("createBoard() should return an array of correct length", () => {
    expect(createBoard(width, height, mines)).toBeInstanceOf(Array);
    expect(createBoard(width, height, mines).length).toBe(width * height);
  });
  test("createBoard() should return array with correct number of mines", () => {
    expect(
      createBoard(width, height, mines).reduce((mineCount, tile) => {
        if (tile.value == "M") return (mineCount += 1);
        else return mineCount;
      }, 0)
    ).toBe(mines);
  });
});

describe("Testing getRandomInt()", () => {
  test("getRandomInt() should return integer", () => {
    for (let i = 0; i < 100; i++) {
      expect(typeof getRandomInt(10)).toBe("number");
      expect(getRandomInt(10) % 1).toBe(0);
    }
  });
  test("getRandomInt() should return random number between 0 and 9", () => {
    for (let i = 0; i < 100; i++) {
      expect(getRandomInt(10)).toBeGreaterThanOrEqual(0);
      expect(getRandomInt(10)).toBeLessThan(10);
    }
  });
});

describe("Testing getSurroundingTiles()", () => {
  const tileId = 11;
  test("getSurroundingTiles() should return array", () => {
    expect(getSurroundingTiles(tileId, width)).toBeInstanceOf(Array);
  });
  test("getSurroundingTiles() should return populated array", () => {
    expect(getSurroundingTiles(tileId, width).length).toBeGreaterThan(0);
  });
  const surroundingTiles = [0, 1, 2, 10, 12, 20, 21, 22];
  test("getSurroundingTiles() should return correctly populated array given non-edge tile", () => {
    expect(getSurroundingTiles(tileId, width)).toEqual(surroundingTiles);
  });
  const leftEdgeTileId = 10;
  const surroundingTilesLeftEdge = [0, 1, 11, 20, 21];
  test("getSurroundingTiles() should return correctly populated array given left-edge tile", () => {
    expect(getSurroundingTiles(leftEdgeTileId, width)).toEqual(
      surroundingTilesLeftEdge
    );
  });
  const rightEdgeTileId = 19;
  const surroundingTileRightEdge = [8, 9, 18, 28, 29];
  test("getSurroundingTiles() should return correctly populated array given right-edge tile", () => {
    expect(getSurroundingTiles(rightEdgeTileId, width)).toEqual(
      surroundingTileRightEdge
    );
  });
});

describe("Testing initialiseBoard()", () => {
  test("initialiseBoard() should return array of correct length", () => {
    expect(initialiseBoard(board, width, height, mines)).toBeInstanceOf(Array);
    expect(initialiseBoard(board, width, height, mines).length).toBe(
      width * height
    );
  });
  test("initialiseBoard() should return array with correct number of mines", () => {
    expect(
      initialiseBoard(board, width, height, mines).reduce((mineCount, tile) => {
        if (tile.value == "M") return (mineCount += 1);
        else return mineCount;
      }, 0)
    ).toBe(mines);
  });
  // modularise initialiseBoard further so can test altering value of surrounding tiles
});

describe("Testing markTile()", () => {
  const tileId = 0;
  const prevState = { board };
  test("markTile() should return object", () => {
    expect(markTile(tileId, prevState)).toBeInstanceOf(Object);
  });
  test("markTile() should return object with board property", () => {
    expect(Object.keys(markTile(tileId, prevState)).length).toBe(1);
    expect(markTile(tileId, prevState).board).toBeTruthy();
  });
  test("markTile() should not alter original board", () => {
    expect(markTile(tileId, prevState).board[tileId.marked]).not.toBe(
      prevState.board[tileId].marked
    );
  });
  test("markTile() should return board with correct tile marked", () => {
    expect(markTile(tileId, prevState).board[tileId].marked).toBeTruthy();
    expect(markTile(tileId, prevState).board[tileId].value).toBe(0);
    expect(markTile(tileId, prevState).board[tileId].displayed).toBeFalsy();
  });
  test("markTile() should not change marked property any other tiles", () => {
    for (let i = 1; i < 100; i++) {
      expect(markTile(tileId, prevState).board[i].marked).toBe(
        prevState.board[i].marked
      );
    }
  });
  test("markTile() should not alter properties of any other tile", () => {
    for (let i = 1; i < 100; i++) {
      expect(markTile(tileId, prevState).board[i].displayed).toBeFalsy();
      expect(markTile(tileId, prevState).board[i].value).toBe(0);
    }
  });
});
