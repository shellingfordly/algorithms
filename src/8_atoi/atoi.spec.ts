import { atoi } from "./atoi";

test("atoi", () => {
  expect(atoi("  123")).toBe(123);
  expect(atoi("  -123")).toBe(-123);
  expect(atoi("  +123")).toBe(123);
  expect(atoi(" w -123")).toBe(0);
  expect(atoi("  -123  word")).toBe(-123);
  expect(atoi("2147483648 2^31-1")).toBe(2147483647);
  expect(atoi("-2147483649 -2^31")).toBe(-2147483648);
});
