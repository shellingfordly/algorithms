import { jump, jump1 } from "./jump";

test("jump", () => {
  expect(jump([2, 3, 1, 1, 4])).toBe(2);
  expect(jump([3, 1, 1, 3, 1, 1, 4])).toBe(2);
  expect(jump([3, 1, 1, 3, 1, 1, 1, 1])).toBe(3);
});

test("jump1", () => {
  expect(jump1([2, 3, 1, 1, 4])).toBe(2);
  expect(jump1([3, 1, 1, 3, 1, 1, 4])).toBe(2);
  expect(jump1([3, 1, 1, 3, 1, 1, 1, 1])).toBe(3);
});
