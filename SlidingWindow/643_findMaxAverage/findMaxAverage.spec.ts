import { findMaxAverage } from "./findMaxAverage"


describe("findMaxAverage", () => {
    it("1", () => {
        expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
    });
    it("2", () => {
        expect(findMaxAverage([5], 1)).toBe(5);
    });

})
