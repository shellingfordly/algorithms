import { wordBreak } from "./word_break";

describe("wordBreak", () => {
  it("1", () => {
    const s = "leetcode",
      wordDict = ["leet", "code"];

    expect(wordBreak(s, wordDict)).toBe(true);
  });

  it("2", () => {
    const s = "applepenapple",
      wordDict = ["apple", "pen"];

    expect(wordBreak(s, wordDict)).toBe(true);
  });

  it("3", () => {
    const s = "catsandog";
    const wordDict = ["cats", "dog", "sand", "and", "cat"];

    expect(wordBreak(s, wordDict)).toBe(false);
  });

  it("4", () => {
    const s = "cars",
      wordDict = ["car", "ca", "s"];

    expect(wordBreak(s, wordDict)).toBe(true);
  });

  it("5", () => {
    const s = "cbca",
      wordDict = ["bc", "ca"];

    expect(wordBreak(s, wordDict)).toBe(false);
  });

  it("6", () => {
    const s = "ccaccc",
      wordDict = ["cc", "ac"];

    expect(wordBreak(s, wordDict)).toBe(true);
  });

  it("7", () => {
    const s = "aaaaaaa",
      wordDict = ["aaaa", "aaa"];

    expect(wordBreak(s, wordDict)).toBe(true);
  });

  it("8", () => {
    const s = "goalspecial",
      wordDict = ["go", "goal", "goals", "special"];

    expect(wordBreak(s, wordDict)).toBe(true);
  });
});
