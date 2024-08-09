import { maximumSubarraySum } from "./maximumSubarraySum"


describe("maximumSubarraySum", () => {
    it("1", () => {
        expect(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)).toBe(15);
        expect(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9, 9], 3)).toBe(15);
        expect(maximumSubarraySum([9, 9, 9, 9], 3)).toBe(0);
    });

    it("2", () => {
        expect(maximumSubarraySum([9], 1)).toBe(9);
        expect(maximumSubarraySum([1, 2], 1)).toBe(2);
        expect(maximumSubarraySum([1, 2], 2)).toBe(3);
        expect(maximumSubarraySum([1, 2, 3, 4], 3)).toBe(9);
    })

    it("3", () => {
        expect(maximumSubarraySum([9, 9, 9, 1, 2, 3], 3)).toBe(12);
    })

})