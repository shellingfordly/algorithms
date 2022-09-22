import { combinationSum2 } from "./combinationSum2";

test("combinationSum2 one case", () => {
  const res = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
  console.log("res", res);

  expect(res).toEqual(
    expect.arrayContaining([
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ])
  );
});

test("combinationSum2 two case", () => {
  const res = combinationSum2([2, 5, 2, 1, 2], 5);
  console.log("res", res);

  expect(res).toEqual(expect.arrayContaining([[1, 2, 2], [5]]));
});
