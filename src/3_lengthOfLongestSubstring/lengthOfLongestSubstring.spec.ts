import { lengthOfLongestSubstring } from "./lengthOfLongestSubstring";

describe("lengthOfLongestSubstring", () => {
  it("one", () => {
    expect(lengthOfLongestSubstring("abcabcba")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbbbbbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    expect(lengthOfLongestSubstring("")).toBe(0);
    expect(lengthOfLongestSubstring("a")).toBe(1);
    expect(lengthOfLongestSubstring("aa")).toBe(1);
    expect(lengthOfLongestSubstring("ab")).toBe(2);
    expect(lengthOfLongestSubstring("abc")).toBe(3);
    expect(lengthOfLongestSubstring("abcdefg")).toBe(7);
    expect(lengthOfLongestSubstring("aab")).toBe(2);
    expect(lengthOfLongestSubstring("abcc")).toBe(3);
    expect(lengthOfLongestSubstring("abna")).toBe(3);
  });
});
