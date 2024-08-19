import { maxSubarrayLength } from "./maxSubarrayLength"

describe("maxSubarrayLength", () => {
    it("1", () => {
        expect(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)).toBe(6)
        expect(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1)).toBe(2)
        expect(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4)).toBe(4)
        expect(maxSubarrayLength([1], 1)).toBe(1)
        expect(maxSubarrayLength([1, 2, 2, 2, 3, 3], 2)).toBe(4)
    })
})