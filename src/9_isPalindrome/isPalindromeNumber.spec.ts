import { isPalindrome, isPalindrome1 } from "./isPalindromeNumber";

test("one", () => {
  expect(isPalindrome(121)).toBe(true);
  expect(isPalindrome1(-121)).toBe(false);
  expect(isPalindrome(123)).toBe(false);
  expect(isPalindrome(12221)).toBe(true);
  expect(isPalindrome(120)).toBe(false);
});

test("two", () => {
  expect(isPalindrome1(121)).toBe(true);
  expect(isPalindrome1(-121)).toBe(false);
  expect(isPalindrome1(123)).toBe(false);
  expect(isPalindrome1(12221)).toBe(true);
  expect(isPalindrome1(120)).toBe(false);
});
