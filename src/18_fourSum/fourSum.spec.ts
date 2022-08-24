import { fourSum } from "./fourSum";

describe("fourSum", () => {
  test("1", () => {
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual(
      expect.arrayContaining([
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ])
    );
  });

  test("2", () => {
    expect(fourSum([2, 2, 2, 2], 8)).toEqual(
      expect.arrayContaining([[2, 2, 2, 2]])
    );
  });
});
