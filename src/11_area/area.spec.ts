import { area } from "./area";

test("area", () => {
  expect(area([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(area([1, 20, 6, 2, 20, 4, 8, 3, 7])).toBe(60);
  expect(area([1, 1])).toBe(1);
  expect(area([1])).toBe(0);
});
