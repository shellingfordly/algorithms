import { searchInsert, searchInsert1 } from "./searchInsert";

test("二分查找", () => {
  expect(searchInsert([1, 3, 4, 5], 2)).toBe(1);
  expect(searchInsert([1, 2, 3, 4, 5], 2)).toBe(1);
  expect(searchInsert([1, 3, 4, 5, 6], 2)).toBe(1);
  expect(searchInsert([2, 3, 4, 5, 6], 1)).toBe(0);
  expect(searchInsert([1, 2, 3, 4], 5)).toBe(4);
  expect(searchInsert([1, 2], 0)).toBe(0);
  expect(searchInsert([1, 3], 2)).toBe(1);

  expect(searchInsert([1], 0)).toBe(0);
  expect(searchInsert([1], 1)).toBe(0);
  expect(searchInsert([0], 1)).toBe(1);
});

test("暴力解法", () => {
  expect(searchInsert1([1, 3, 4, 5], 2)).toBe(1);
  expect(searchInsert1([1, 2, 3, 4, 5], 2)).toBe(1);
  expect(searchInsert1([1, 3, 4, 5, 6], 2)).toBe(1);
  expect(searchInsert1([2, 3, 4, 5, 6], 1)).toBe(0);
  expect(searchInsert1([1, 2, 3, 4], 5)).toBe(4);
  expect(searchInsert1([1, 2], 0)).toBe(0);
  expect(searchInsert1([1, 3], 2)).toBe(1);
  expect(searchInsert1([1], 0)).toBe(0);
  expect(searchInsert1([1], 1)).toBe(0);
  expect(searchInsert1([0], 1)).toBe(1);
});
