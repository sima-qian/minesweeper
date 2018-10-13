/* eslint-disable */

import getRandomInt from "../utils/random-number";
import getSurroundingTiles from "../utils/get-surrounding-tiles";

describe("Testing getRandomInt()", () => {
  test("function should return integer", () => {
    for (let i = 0; i < 100; i++) {
      expect(typeof getRandomInt(10)).toBe("number");
      expect(getRandomInt(10) % 1).toBe(0);
    }
  });
  test("function should return random number between 0 and 9", () => {
    for (let i = 0; i < 100; i++) {
      expect(getRandomInt(10)).toBeGreaterThanOrEqual(0);
      expect(getRandomInt(10)).toBeLessThan(10);
    }
  });
});

describe("Testing getSurroundingTiles()", () => {
  const tileId = 11;
  const boardWidth = 10;

  test("function should return array", () => {
    expect(getSurroundingTiles(tileId, boardWidth)).toBeInstanceOf(Array);
  });
  test("function should return populated array", () => {
    expect(getSurroundingTiles(tileId, boardWidth).length).toBeGreaterThan(0);
  });

  const surroundingTiles = [0, 1, 2, 10, 12, 20, 21, 22];
  test("function should return correctly populated array given non-edge tile", () => {
    expect(getSurroundingTiles(tileId, boardWidth)).toEqual(surroundingTiles);
  });

  const leftEdgeTileId = 10;
  const surroundingTilesLeftEdge = [0, 1, 11, 20, 21];
  test("function should return correctly populated array given left-edge tile", () => {
    expect(getSurroundingTiles(leftEdgeTileId, boardWidth)).toEqual(
      surroundingTilesLeftEdge
    );
  });

  const rightEdgeTileId = 19;
  const surroundingTileRightEdge = [8, 9, 18, 28, 29];
  test("function should return correctly populated array given right-edge tile", () => {
    expect(getSurroundingTiles(rightEdgeTileId, boardWidth)).toEqual(
      surroundingTileRightEdge
    );
  });
});
