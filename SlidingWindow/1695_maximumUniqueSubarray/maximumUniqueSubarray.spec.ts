import { maximumUniqueSubarray } from "./maximumUniqueSubarray"

describe("maximumUniqueSubarray", () => {
    it("1", () => {
        expect(maximumUniqueSubarray([4, 2, 4, 5, 6])).toBe(17)
        expect(maximumUniqueSubarray([4, 2, 4, 5, 6, 6, 8, 9])).toBe(23)
    })
    it("2", () => {
        expect(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])).toBe(8)
    })

    it("3", () => {
        expect(maximumUniqueSubarray([1, 2, 3, 4])).toBe(10)
    })
})