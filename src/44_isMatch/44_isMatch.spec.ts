import { isMatch } from "./44_isMatch";

test("isMatch", () => {
  expect(isMatch("aa", "a")).toBe(false);
  expect(isMatch("aa", "*")).toBe(true);
  expect(isMatch("cb", "?a")).toBe(false);
  expect(isMatch("ddaceb", "*a*b")).toBe(true);
  expect(isMatch("ddaced", "*a*b")).toBe(false);
  expect(isMatch("acdcb", "a*c?b")).toBe(false);
  expect(isMatch("acdcb", "?c*?b")).toBe(true);
  expect(isMatch("acdadasdab", "?c*b")).toBe(true);
  expect(isMatch("dbbb", "*b")).toBe(true);
});
