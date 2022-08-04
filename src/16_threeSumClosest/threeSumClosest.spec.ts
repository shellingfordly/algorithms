import { threeSumClosest } from "./threeSumClosest";

test("", () => {
  expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
  expect(threeSumClosest([-4, -2, 0, 1, 2, 3], 3)).toBe(3);
});
