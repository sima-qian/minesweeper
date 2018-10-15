/* eslint-disable */

import createBoard from "../../utils/create-board";
import data from "./utils-data";

describe("Testing createBoard()", () => {
  test("createBoard() should return an array of correct length", () => {
    expect(createBoard(data.width, data.height, data.mines)).toBeInstanceOf(
      Array
    );
    expect(createBoard(data.width, data.height, data.mines).length).toBe(
      data.width * data.height
    );
  });
  test("createBoard() should return array with correct number of mines", () => {
    expect(
      createBoard(data.width, data.height, data.mines).reduce(
        (mineCount, tile) => {
          if (tile.value == "M") return (mineCount += 1);
          else return mineCount;
        },
        0
      )
    ).toBe(data.mines);
  });
});
