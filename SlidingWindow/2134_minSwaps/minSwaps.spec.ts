import { minSwaps, minSwaps1, minSwaps2 } from "./minSwaps"


describe("minSwaps", () => {
    it("1", () => {
        expect(minSwaps([0, 1, 0, 1, 1, 0, 0])).toBe(1);
    });
    it("2", () => {
        expect(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0])).toBe(2);
    });
    it("3", () => {
        expect(minSwaps([0, 1, 1, 1, 0, 0, 0, 1, 1, 0])).toBe(2);
    });
    it("4", () => {
        expect(minSwaps([1, 1, 0, 0, 1])).toBe(0);
    });
})

describe("minSwaps1", () => {
    it("1", () => {
        expect(minSwaps1([0, 1, 0, 1, 1, 0, 0])).toBe(1);
    });
    it("2", () => {
        expect(minSwaps1([0, 1, 1, 1, 0, 0, 1, 1, 0])).toBe(2);
    });
    it("3", () => {
        expect(minSwaps1([0, 1, 1, 1, 0, 0, 0, 1, 1, 0])).toBe(2);
    });
    it("4", () => {
        expect(minSwaps1([1, 1, 0, 0, 1])).toBe(0);
    });
})


describe("minSwaps2", () => {
    it("1", () => {
        expect(minSwaps2([0, 1, 0, 1, 1, 0, 0])).toBe(1);
    });
    it("2", () => {
        expect(minSwaps2([0, 1, 1, 1, 0, 0, 1, 1, 0])).toBe(2);
    });
    it("3", () => {
        expect(minSwaps2([0, 1, 1, 1, 0, 0, 0, 1, 1, 0])).toBe(2);
    });
    it("4", () => {
        expect(minSwaps2([1, 1, 0, 0, 1])).toBe(0);
    });
})
