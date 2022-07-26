import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("base", () => {
    expect(twoSum([2, 7, 11, 15], 9)[0]).toBe(0);
    expect(twoSum([2, 7, 11, 15], 9)[1]).toBe(1);
  });
});
