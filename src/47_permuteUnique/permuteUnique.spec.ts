import { permuteUnique } from "./permuteUnique";

test("permuteUnique", () => {
  expect(permuteUnique([1, 1, 2])).toEqual(
    expect.arrayContaining([
      [1, 1, 2],
      [2, 1, 1],
      [1, 2, 1],
    ])
  );
});

test("permuteUnique", () => {
  expect(permuteUnique([1, 1, 2, 2])).toEqual(
    expect.arrayContaining([
      [1, 1, 2, 2],
      [1, 2, 1, 2],
      [2, 1, 1, 2],
      [1, 2, 2, 1],
      [2, 1, 2, 1],
      [2, 2, 1, 1],
    ])
  );
});

test.only(",", () => {
  expect(permuteUnique([3, 3, 0, 3])).toEqual(
    expect.arrayContaining([
      [0, 3, 3, 3],
      [3, 0, 3, 3],
      [3, 3, 0, 3],
      [3, 3, 3, 0],
    ])
  );
});
