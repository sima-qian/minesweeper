/* eslint-disable */

import revealZeroNeighbours from "../../utils/reveal-zero-neighbours";
import data from "./utils-data";

describe("Testing revealZeroNeighbours()", () => {
  const tileId = 11;
  test("revealZeroNeighbours() should return array of same length given", () => {
    expect(
      revealZeroNeighbours(tileId, data.board, data.width, data.height)
    ).toBeInstanceOf(Array);
    expect(
      revealZeroNeighbours(tileId, data.board, data.width, data.height).length
    ).toBe(data.width * data.height);
  });
  test("revealZeroNeighbours should return fully displayed board given uninitialised board", () => {
    revealZeroNeighbours(tileId, data.board, data.width, data.height).forEach(
      tile => {
        expect(tile.displayed).toBeTruthy();
        expect(tile.marked).toBeFalsy();
      }
    );
  });

  const smallTestBoard = [
    { value: 2, displayed: false, marked: false },
    { value: 2, displayed: false, marked: false },
    { value: 2, displayed: false, marked: false },
    { value: 2, displayed: false, marked: false },
    { value: 2, displayed: false, marked: false },
    { value: 1, displayed: false, marked: false },
    { value: 0, displayed: false, marked: false },
    { value: 0, displayed: false, marked: false },
    { value: 2, displayed: false, marked: false },
    { value: 1, displayed: false, marked: false },
    { value: 0, displayed: false, marked: false },
    { value: 0, displayed: false, marked: false },
    { value: 2, displayed: false, marked: false },
    { value: 1, displayed: false, marked: false },
    { value: 0, displayed: false, marked: false },
    { value: 0, displayed: false, marked: false }
  ];

  const smallTestBoardResult = [
    { value: 2, displayed: false, marked: false },
    { value: 2, displayed: true, marked: false },
    { value: 2, displayed: true, marked: false },
    { value: 2, displayed: true, marked: false },
    { value: 2, displayed: false, marked: false },
    { value: 1, displayed: true, marked: false },
    { value: 0, displayed: true, marked: false },
    { value: 0, displayed: true, marked: false },
    { value: 2, displayed: false, marked: false },
    { value: 1, displayed: true, marked: false },
    { value: 0, displayed: true, marked: false },
    { value: 0, displayed: true, marked: false },
    { value: 2, displayed: false, marked: false },
    { value: 1, displayed: true, marked: false },
    { value: 0, displayed: true, marked: false },
    { value: 0, displayed: true, marked: false }
  ];

  test("revealZeroNeighbours should return correct result of test board", () => {
    expect(revealZeroNeighbours(15, smallTestBoard, 4, 4)).toEqual(
      smallTestBoardResult
    );
  });
});
