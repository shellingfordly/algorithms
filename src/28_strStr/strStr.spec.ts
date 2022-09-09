import { strStr } from "./strStr";

test("strStr", () => {
  expect(strStr("aabc", "bc")).toBe(2);
  expect(strStr("aabcddd", "bc")).toBe(2);
  expect(strStr("aabc", "bcd")).toBe(-1);
});
