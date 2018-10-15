/* eslint-disable */

import revealZeroNeighbours from "../../utils/reveal-zero-neighbours";
import data from "./utils-data";

describe("Testing revealZeroNeighbours()", () => {
  const tileId = 11;
  test("revealZeroNeighbours() should return array of same length given", () => {
    expect(revealZeroNeighbours(data.board, tileId)).toBeInstanceOf(Array);
    expect(revealZeroNeighbours(data.board, tileId).length).toBe(
      data.width * data.height
    );
  });

  // more tests
});
