import { minimumDifference } from "./minimumDifference"


describe("minimumDifference", () => {
    it("1", () => {
        expect(minimumDifference([90], 1)).toBe(0);
    });
    it("2", () => {
        expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2);
    });
    it("3", () => {
        expect(minimumDifference([9, 4, 1, 7], 3)).toBe(5);
    });
    it("4", () => {
        expect(minimumDifference([9, 3, 6, 8, 5], 3)).toBe(3);
    });
    it("5", () => {
        expect(minimumDifference([1, 9, 20, 50, 99, 88, 66, 45], 5)).toBe(49);
    });
})
