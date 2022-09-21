import { combinationSum, combinationSum1 } from "./combinationSum";

test("combinationSum", () => {
  expect(combinationSum([2, 3, 6, 7], 7)).toEqual(
    expect.arrayContaining([[2, 2, 3], [7]])
  );
});

test("combinationSum1", () => {
  expect(combinationSum1([2, 3, 6, 7], 7)).toEqual(
    expect.arrayContaining([[2, 2, 3], [7]])
  );

  expect(combinationSum1([2], 1).length).toBe(0);
  expect(combinationSum1([], 1).length).toBe(0);
});
