/* eslint-disable */

import addMine from "../../utils/add-mine";
import data from "./utils-data";

describe("Testing addMine()", () => {
  const tileId = 0;
  test("addMine() should return array", () => {
    expect(addMine(data.board, tileId)).toBeInstanceOf(Array);
  });
  test("addMine() should return populated array", () => {
    expect(addMine(data.board, tileId).length).toBeGreaterThan(0);
  });
  test("addMine() should not alter original array", () => {
    expect(addMine(data.board, tileId)[tileId].value).not.toBe(
      data.board[tileId].value
    );
  });
  test("addMine() should return array with mine at given tile", () => {
    expect(addMine(data.board, tileId)[tileId].value).toBe("M");
    expect(addMine(data.board, tileId)[tileId].displayed).toBeFalsy();
    expect(addMine(data.board, tileId)[tileId].marked).toBeFalsy();
  });
  test("addMine() should not alter value of any other tile", () => {
    for (let i = 1; i < 100; i++) {
      expect(addMine(data.board, tileId)[i].value).toBe(0);
    }
  });
  test("addMine() should not alter properties of any other tile", () => {
    for (let i = 1; i < 100; i++) {
      expect(addMine(data.board, tileId)[i].displayed).toBeFalsy();
      expect(addMine(data.board, tileId)[i].marked).toBeFalsy();
    }
  });
});
