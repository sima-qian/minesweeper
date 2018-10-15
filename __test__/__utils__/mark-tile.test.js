/* eslint-disable */

import markTile from "../../utils/mark-tile";
import data from "./utils-data";

describe("Testing markTile()", () => {
  const tileId = 0;
  const prevState = { board: data.board };
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
