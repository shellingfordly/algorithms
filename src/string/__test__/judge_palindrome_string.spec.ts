import { judgePalindromeString } from "../src/judge_palindrome_string";
describe("judgePalindromeString", () => {
  it.only("simple", () => {
    expect(judgePalindromeString("abccba")).toBe(true);
    expect(judgePalindromeString("l kjas jkl")).toBe(false);
    expect(judgePalindromeString("l kja   jk  l")).toBe(true);
    expect(judgePalindromeString("dadaadad")).toBe(true);
  });
});
