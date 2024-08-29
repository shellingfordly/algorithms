import { maxFrequencyScore, maxFrequencyScore1 } from "./maxFrequencyScore"

describe("maxFrequencyScore", () => {
    it("1", () => {
        expect(maxFrequencyScore([1, 2, 6, 4], 3)).toBe(3)
    })
    it("2", () => {
        expect(maxFrequencyScore([1, 4, 4, 2, 4], 0)).toBe(3)
    })
})

describe("maxFrequencyScore1", () => {
    it("1", () => {
        expect(maxFrequencyScore1([1, 2, 6, 4], 3)).toBe(3)
    })
    it("2", () => {
        expect(maxFrequencyScore1([1, 4, 4, 2, 4], 0)).toBe(3)
    })
})