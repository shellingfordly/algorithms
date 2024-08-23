import { maxFrequency, maxFrequency1 } from "./maxFrequency"

describe("maxFrequency", () => {
    it("1", () => {
        expect(maxFrequency([1, 2, 4], 5)).toBe(3)
    })
    it("2", () => {
        expect(maxFrequency([1, 4, 8, 13], 5)).toBe(2)
    })
    it("3", () => {
        expect(maxFrequency([3, 9, 6], 2)).toBe(1)
    })
    it("4", () => {
        expect(maxFrequency([3, 9, 6, 8], 2)).toBe(2)
    })
    it("5", () => {
        expect(maxFrequency([6, 6, 6, 6], 2)).toBe(4)
        expect(maxFrequency([6, 6, 6, 5], 0)).toBe(3)
    })
    it("6", () => {
        expect(maxFrequency([6, 6, 6, 5, 5, 5], 3)).toBe(6)
    })
    it("7", () => {
        expect(maxFrequency([6, 5, 4, 3, 2, 1], 3)).toBe(3)
    })
})


describe("maxFrequency1", () => {
    it("1", () => {
        expect(maxFrequency1([1, 2, 4], 5)).toBe(3)
    })
    it("2", () => {
        expect(maxFrequency1([1, 4, 8, 13], 5)).toBe(2)
    })
    it("3", () => {
        expect(maxFrequency1([3, 9, 6], 2)).toBe(1)
    })
    it("4", () => {
        expect(maxFrequency1([3, 9, 6, 8], 2)).toBe(2)
    })
    it("5", () => {
        expect(maxFrequency1([6, 6, 6, 6], 2)).toBe(4)
        expect(maxFrequency1([6, 6, 6, 5], 0)).toBe(3)
    })
    it("6", () => {
        expect(maxFrequency1([6, 6, 6, 5, 5, 5], 3)).toBe(6)
    })
    it("7", () => {
        expect(maxFrequency1([6, 5, 4, 3, 2, 1], 3)).toBe(3)
    })
})