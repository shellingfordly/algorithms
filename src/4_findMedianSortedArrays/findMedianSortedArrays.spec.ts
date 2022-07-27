import { findMedianSortedArrays } from "./findMedianSortedArrays";

describe("findMedianSortedArrays", () => {
  it("one", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    expect(findMedianSortedArrays([1, 2, 3], [4])).toBe(2.5);
    expect(findMedianSortedArrays([1, 2, 3], [4])).toBe(2.5);
  });
});
