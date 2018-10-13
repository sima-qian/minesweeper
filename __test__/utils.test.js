/* eslint-disable */
import addMine from "../utils/add-mine";
import getRandomInt from "../utils/random-number";
import getSurroundingTiles from "../utils/get-surrounding-tiles";

describe("Testing addMine()", () => {
  const board = [];
  for (let i = 0; i < 100; i++) {
    board.push({ value: 0, displayed: false, marked: false });
  }
  const tileId = 0;

  test("addMine() should return array", () => {
    expect(addMine(board, tileId)).toBeInstanceOf(Array);
  });
  test("addMine() should return populated array", () => {
    expect(addMine(board, tileId).length).toBeGreaterThan(0);
  });
  test("addMine() should return array with mine at given tile", () => {
    expect(addMine(board, tileId)[tileId].value).toBe("M");
  });
  test("addMine() should not alter original array", () => {
    expect(addMine(board, tileId)[tileId].value).not.toBe(board[tileId].value);
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
  const boardWidth = 10;

  test("getSurroundingTiles() should return array", () => {
    expect(getSurroundingTiles(tileId, boardWidth)).toBeInstanceOf(Array);
  });
  test("getSurroundingTiles() should return populated array", () => {
    expect(getSurroundingTiles(tileId, boardWidth).length).toBeGreaterThan(0);
  });

  const surroundingTiles = [0, 1, 2, 10, 12, 20, 21, 22];
  test("getSurroundingTiles() should return correctly populated array given non-edge tile", () => {
    expect(getSurroundingTiles(tileId, boardWidth)).toEqual(surroundingTiles);
  });

  const leftEdgeTileId = 10;
  const surroundingTilesLeftEdge = [0, 1, 11, 20, 21];
  test("getSurroundingTiles() should return correctly populated array given left-edge tile", () => {
    expect(getSurroundingTiles(leftEdgeTileId, boardWidth)).toEqual(
      surroundingTilesLeftEdge
    );
  });

  const rightEdgeTileId = 19;
  const surroundingTileRightEdge = [8, 9, 18, 28, 29];
  test("getSurroundingTiles() should return correctly populated array given right-edge tile", () => {
    expect(getSurroundingTiles(rightEdgeTileId, boardWidth)).toEqual(
      surroundingTileRightEdge
    );
  });
});
