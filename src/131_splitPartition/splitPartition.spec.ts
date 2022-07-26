import { partition } from "./splitPartition";

describe("partition", () => {
  it("", () => {
    const res = partition("aab");

    expect(res).toStrictEqual([
      ["a", "a", "b"],
      ["aa", "b"],
    ]);
  });
});
