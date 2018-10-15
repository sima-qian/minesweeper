/* eslint-disable */

import getRandomInt from "../../utils/random-number";

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
