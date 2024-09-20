import { maximumCount, maximumCount1 } from "./maximumCount"

describe("maximumCount", () => {
    it("1", () => {
        expect(maximumCount([-2, -1, -1, 1, 2, 3])).toBe(3)
    })
    it("2", () => {
        expect(maximumCount([-3, -2, -1, 0, 0, 1, 2])).toBe(3)
    })
    it("3", () => {
        expect(maximumCount([5, 20, 66, 1314])).toBe(4)
    })
    it("4", () => {
        expect(maximumCount([-1563, -236, -114, -55, 427, 447, 687, 752, 1021, 1636])).toBe(6)
    })
})

describe("maximumCount1", () => {
    it("1", () => {
        expect(maximumCount1([-2, -1, -1, 1, 2, 3])).toBe(3)
    })
    it("2", () => {
        expect(maximumCount1([-3, -2, -1, 0, 0, 1, 2])).toBe(3)
    })
    it("3", () => {
        expect(maximumCount1([5, 20, 66, 1314])).toBe(4)
    })
    it("4", () => {
        expect(maximumCount1([-1563, -236, -114, -55, 427, 447, 687, 752, 1021, 1636])).toBe(6)
    })
})