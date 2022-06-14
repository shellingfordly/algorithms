import { moveZeroes, moveZeroes1, moveZeroes2 } from "./move_zero";

describe("move zero", () => {
  it("moveZeroes", () => {
    const nums = [0, 0, 1];
    moveZeroes(nums);

    expect(nums[0]).toBe(1);
    expect(nums[1]).toBe(0);
    expect(nums[2]).toBe(0);
  });

  it("moveZeroes1", () => {
    const nums = [0, 0, 1];
    moveZeroes1(nums);

    expect(nums[0]).toBe(1);
    expect(nums[1]).toBe(0);
    expect(nums[2]).toBe(0);
  });

  it("moveZeroes2", () => {
    const nums = [0, 0, 1];
    moveZeroes2(nums);

    expect(nums[0]).toBe(1);
    expect(nums[1]).toBe(0);
    expect(nums[2]).toBe(0);
  });
});
