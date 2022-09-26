import { trap, trap1, trap2 } from "./trap";

test("trap", () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
});

test("trap1", () => {
  expect(trap1([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(trap1([4, 2, 0, 3, 2, 5])).toBe(9);
});

test("trap2", () => {
  expect(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(trap2([4, 2, 0, 3, 2, 5])).toBe(9);
});
