import { partition } from "../src/split_palindrome_string";

describe("partition", () => {
  it("", () => {
    const res = partition("aab");

    expect(res).toStrictEqual([
      ["a", "a", "b"],
      ["aa", "b"],
    ]);
  });
});
