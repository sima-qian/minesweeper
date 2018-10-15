/* eslint-disable */

import getSurroundingTiles from "../../utils/get-surrounding-tiles";
import data from "./utils-data";

describe("Testing getSurroundingTiles()", () => {
  const tileId = 11;
  test("getSurroundingTiles() should return array", () => {
    expect(getSurroundingTiles(tileId, data.width)).toBeInstanceOf(Array);
  });
  test("getSurroundingTiles() should return populated array", () => {
    expect(getSurroundingTiles(tileId, data.width).length).toBeGreaterThan(0);
  });
  const surroundingTiles = [0, 1, 2, 10, 12, 20, 21, 22];
  test("getSurroundingTiles() should return correctly populated array given non-edge tile", () => {
    expect(getSurroundingTiles(tileId, data.width)).toEqual(surroundingTiles);
  });
  const leftEdgeTileId = 10;
  const surroundingTilesLeftEdge = [0, 1, 11, 20, 21];
  test("getSurroundingTiles() should return correctly populated array given left-edge tile", () => {
    expect(getSurroundingTiles(leftEdgeTileId, data.width)).toEqual(
      surroundingTilesLeftEdge
    );
  });
  const rightEdgeTileId = 19;
  const surroundingTileRightEdge = [8, 9, 18, 28, 29];
  test("getSurroundingTiles() should return correctly populated array given right-edge tile", () => {
    expect(getSurroundingTiles(rightEdgeTileId, data.width)).toEqual(
      surroundingTileRightEdge
    );
  });
});
