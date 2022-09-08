import { removeDuplicates, removeDuplicates1 } from "./removeDuplicates";

test("removeDuplicates", () => {
  expect(removeDuplicates([1, 1, 2, 2, 3])).toBe(3);
  expect(removeDuplicates([1, 2, 3])).toBe(3);
  expect(removeDuplicates([1])).toBe(1);
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  expect(removeDuplicates([1, 2, 2])).toBe(2);
  expect(removeDuplicates1([0, 0, 0, 0, 1, 1])).toBe(2);
});

test.only("removeDuplicates1", () => {
  // expect(removeDuplicates1([1, 1, 2, 2, 3])).toBe(3);
  // expect(removeDuplicates1([1, 2, 3])).toBe(3);
  // expect(removeDuplicates1([1])).toBe(1);
  // expect(removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  // expect(removeDuplicates1([1, 2, 2])).toBe(2);
  expect(removeDuplicates1([0, 0, 0, 0, 1, 1])).toBe(2);
});
