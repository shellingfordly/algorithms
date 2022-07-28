import { reverse } from "./reverse";

describe("reverse", () => {
  it("border", () => {
    expect(reverse(Math.pow(2, 32))).toBe(0);
    expect(reverse(0)).toBe(0);
    expect(reverse(-0)).toBe(-0);
    expect(reverse(1)).toBe(1);
    expect(reverse(-1)).toBe(-1);
  });

  it("common", () => {
    expect(reverse(10)).toBe(1);
    expect(reverse(10000)).toBe(1);
    expect(reverse(202)).toBe(202);
    expect(reverse(-202)).toBe(-202);
    expect(reverse(1000009)).toBe(9000001);
    expect(reverse(123)).toBe(321);
    expect(reverse(-123)).toBe(-321);
    expect(reverse(1534236469)).toBe(0);
  });
});
