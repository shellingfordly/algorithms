import { isPalindrome } from "../src/palindrome_string";

describe("isPalindrome", () => {
  it("should", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("race a car")).toBe(false);
    expect(isPalindrome("a b,. c /']cb==_-]]{a")).toBe(true);
  });
});
