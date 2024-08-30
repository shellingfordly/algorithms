import { minSubArrayLen } from "./minSubArrayLen"

describe("minSubArrayLen", () => {
    it("1", () => {
        expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2)
    })

    it("2", () => {
        expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2)
    })

    it("3", () => {
        expect(minSubArrayLen(1, [2, 3, 4])).toBe(1)
        expect(minSubArrayLen(4, [2, 3, 4])).toBe(1)
    })

    it("4", () => {
        expect(minSubArrayLen(7, [1, 2, 3])).toBe(0)
        expect(minSubArrayLen(7, [1, 2, 3, 1])).toBe(4)
        expect(minSubArrayLen(7, [1, 2, 3, 3])).toBe(3)
        expect(minSubArrayLen(7, [1, 2, 3, 1, 3])).toBe(3)
        expect(minSubArrayLen(7, [1, 2, 3, 1, 1, 1, 3])).toBe(4)
        expect(minSubArrayLen(7, [1, 2, 3, 2, 1, 1, 3])).toBe(3)
    })
})