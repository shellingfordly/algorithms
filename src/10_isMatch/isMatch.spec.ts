import { isMatch } from "./isMatch";

test("1", () => {
  expect(isMatch("aa", "a")).toBe(false);
});

test("2", () => {
  expect(isMatch("a", "aa")).toBe(false);
});

test("3", () => {
  expect(isMatch("a", "a*")).toBe(true);
});

test("4", () => {
  expect(isMatch("aa", "a*")).toBe(true);
});

test("5", () => {
  expect(isMatch("abc", ".*")).toBe(true);
});

test("6", () => {
  expect(isMatch("aab", "c*a*b*")).toBe(true);
});

test("7", () => {
  expect(isMatch("aab", "c*a*b")).toBe(true);
});

test("8", () => {
  expect(isMatch("mississippi", "mis*is*ip*.")).toBe(true);
});

test("9", () => {
  expect(isMatch("aabc", "c*a*b*")).toBe(false);
});

test("10", () => {
  expect(isMatch("abc", "mbc")).toBe(false);
});

test("11", () => {
  expect(isMatch("aaa", "a*a")).toBe(true);
});

test("12", () => {
  expect(isMatch("aa1", "a*1")).toBe(true);
});

test("13", () => {
  expect(isMatch("aaa", "ab*a*c*a")).toBe(true);
});
