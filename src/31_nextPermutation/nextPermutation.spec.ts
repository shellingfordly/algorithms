import { nextPermutation } from "./nextPermutation";

test("nextPermutation", () => {
  expect(nextPermutation([1, 2, 3])).toEqual(expect.arrayContaining([1, 3, 2]));
  expect(nextPermutation([1, 3, 2])).toEqual(expect.arrayContaining([2, 1, 3]));
  expect(nextPermutation([3, 2, 1])).toEqual(expect.arrayContaining([1, 2, 3]));
  expect(nextPermutation([1, 1, 5])).toEqual(expect.arrayContaining([1, 5, 1]));
  expect(nextPermutation([1, 5, 1])).toEqual(expect.arrayContaining([5, 1, 1]));
});
