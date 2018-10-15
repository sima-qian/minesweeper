/* eslint-disable */

import initialiseBoard from "../../utils/initialise-board";
import data from "./utils-data";

describe("Testing initialiseBoard()", () => {
  test("initialiseBoard() should return array of correct length", () => {
    expect(
      initialiseBoard(data.board, data.width, data.height, data.mines)
    ).toBeInstanceOf(Array);
    expect(
      initialiseBoard(data.board, data.width, data.height, data.mines).length
    ).toBe(data.width * data.height);
  });
  test("initialiseBoard() should return array with correct number of mines", () => {
    expect(
      initialiseBoard(data.board, data.width, data.height, data.mines).reduce(
        (mineCount, tile) => {
          if (tile.value == "M") return (mineCount += 1);
          else return mineCount;
        },
        0
      )
    ).toBe(data.mines);
  });
  // modularise initialiseBoard further so can test altering value of surrounding tiles
});
