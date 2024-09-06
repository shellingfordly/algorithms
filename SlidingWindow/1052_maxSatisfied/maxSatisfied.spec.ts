import { maxSatisfied } from "./maxSatisfied"


describe("maxSatisfied", () => {
    it("1", () => {
        expect(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)).toBe(16);
    });
    it("2", () => {
        expect(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 5)).toBe(18);
    });
    it("3", () => {
        expect(maxSatisfied([1], [0], 1)).toBe(1);
        expect(maxSatisfied([3], [1], 1)).toBe(3);
    });
    it("4", () => {
        expect(maxSatisfied([0], [0], 1)).toBe(0);
    });
    it("5", () => {
        expect(maxSatisfied([10, 4], [0, 1], 2)).toBe(14);
    });
    it("6", () => {
        expect(maxSatisfied([2, 6, 6, 9], [0, 0, 1, 1], 1)).toBe(17);
    });

    it("7", () => {
        expect(maxSatisfied([4, 10, 10], [1, 1, 0], 2)).toBe(24);
    });
})