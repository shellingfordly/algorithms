import { longestOnes, longestOnes1 } from "./longestOnes"


describe("longestOnes", () => {
    it("1", () => {
        expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6)
        expect(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10)
        expect(longestOnes([1, 1, 1, 1, 1, 1], 3)).toBe(6)
        expect(longestOnes([0, 0, 0, 0], 3)).toBe(3)
    })
})

describe("longestOnes1", () => {
    it("1", () => {
        expect(longestOnes1([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6)
        expect(longestOnes1([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10)
        expect(longestOnes1([1, 1, 1, 1, 1, 1], 3)).toBe(6)
        expect(longestOnes1([0, 0, 0, 0], 3)).toBe(3)
    })
})