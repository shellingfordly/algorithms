import { minMutation } from "./min_gene_change";

describe("minMutation", () => {
  it("should", () => {
    expect(
      minMutation("AAAAACCC", "AACCCCCC", ["AAAACCCC", "AAACCCCC", "AACCCCCC"])
    ).toBe(3);
  });
});
