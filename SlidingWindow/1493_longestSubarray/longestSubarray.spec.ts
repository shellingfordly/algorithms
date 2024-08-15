import { longestSubarray } from "./longestSubarray"

describe("longestSubarray", () => {
    it("1", () => {
        expect(longestSubarray([1, 1, 0, 1])).toBe(3)
    })
    it("2", () => {
        expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5)
    })
    it("3", () => {
        expect(longestSubarray([0, 1, 1, 1, 0, 0, 1, 0, 1])).toBe(3)
    })
    it("4", () => {
        expect(longestSubarray([1, 1, 1])).toBe(2)
    })
    it("5", () => {
        expect(longestSubarray([0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1])).toBe(5)
    })
    it("6", () => {
        expect(longestSubarray([0, 0, 0, 0, 0, 0, 0, 1, 1, 1])).toBe(3)
    })
    it("7", () => {
        expect(longestSubarray([0, 0, 0, 0, 0, 0, 0, 1])).toBe(1)
        expect(longestSubarray([1, 0, 0, 0, 0, 0, 0, 0])).toBe(1)
        expect(longestSubarray([0, 0, 0, 0, 0, 0, 0, 0])).toBe(0)
    })
})