import {
  longestValidParentheses,
  longestValidParentheses1,
} from "./longestValidParentheses";

test("longestValidParentheses", () => {
  expect(longestValidParentheses("")).toBe(0);
  expect(longestValidParentheses("(")).toBe(0);
  expect(longestValidParentheses("()")).toBe(2);
  expect(longestValidParentheses("()(()()")).toBe(4);
  expect(longestValidParentheses("())()()")).toBe(4);
  expect(longestValidParentheses("()(()())")).toBe(8);
});

test("longestValidParentheses1", () => {
  expect(longestValidParentheses1("")).toBe(0);
  expect(longestValidParentheses1("(")).toBe(0);
  expect(longestValidParentheses1("()")).toBe(2);
  expect(longestValidParentheses1("()(()()")).toBe(4);
  expect(longestValidParentheses1("())()()")).toBe(4);
  expect(longestValidParentheses1("()(()())")).toBe(8);
});
