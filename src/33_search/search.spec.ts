import { search, search1 } from "./search";

test("search", () => {
  expect(search([1], 0)).toBe(-1);
  expect(search([3, 1], 1)).toBe(1);
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  expect(search([4, 5, 6, 7, 0, 1, 2], 7)).toBe(3);
  expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});

test("search1", () => {
  expect(search1([1], 0)).toBe(-1);
  expect(search1([3, 1], 1)).toBe(1);
  expect(search1([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  expect(search1([4, 5, 6, 7, 0, 1, 2], 7)).toBe(3);
  expect(search1([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});
