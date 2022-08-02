import { threeSum } from "./threeSum";

test("threeSum", () => {
  expect(threeSum([-1, 0, 1, 2, 2, -1])).toEqual(
    expect.arrayContaining([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  );
  expect(threeSum([-1, -1, -1, 0, 1, 2, 2])).toEqual(
    expect.arrayContaining([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  );

  expect(threeSum([0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(
    expect.arrayContaining([[0, 0, 0]])
  );

  expect(threeSum([])).toEqual(expect.arrayContaining([]));
  expect(threeSum([1, 2])).toEqual(expect.arrayContaining([]));
});
