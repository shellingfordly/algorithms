import { maxConsecutiveAnswers } from "./maxConsecutiveAnswers"


describe("maxConsecutiveAnswers", () => {
    it("1", () => {
        expect(maxConsecutiveAnswers("TTFF", 2)).toBe(4)
    })
    it("2", () => {
        expect(maxConsecutiveAnswers("TFFT", 1)).toBe(3)
    })
    it("3", () => {
        expect(maxConsecutiveAnswers("TTFTTFTT", 1)).toBe(5)
    })
})