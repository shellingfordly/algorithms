import { rotate } from "./";

test("permuteUnique", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  rotate(matrix)
  expect(matrix).toContainEqual(
    expect.arrayContaining([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ])
  );
});