import { removeElement } from "./removeElement";

test("removeElement", () => {
  expect(removeElement([1, 2, 3], 3)).toBe(2);
  expect(removeElement([1], 3)).toBe(1);
  expect(removeElement([], 3)).toBe(0);
  expect(removeElement([1], 1)).toBe(0);
  expect(removeElement([1, 2], 1)).toBe(1);
});
