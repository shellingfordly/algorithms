import { numSubarrayProductLessThanK } from "./numSubarrayProductLessThanK";

describe("numSubarrayProductLessThanK", () => {
    it("1", () => {
        expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100)).toBe(8)
    })
    it("2", () => {
        expect(numSubarrayProductLessThanK([1, 2, 3], 0)).toBe(0)
    })
    it("3", () => {
        expect(numSubarrayProductLessThanK([1, 2, 2, 5, 2, 2, 2, 1, 2], 3)).toBe(11)
    })
})