import { subarraysWithKDistinct } from "./subarraysWithKDistinct"

describe("subarraysWithKDistinct", () => {
    it("1", () => {
        expect(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)).toBe(7)
    })
    it("2", () => {
        expect(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)).toBe(3)
    })
    it("3", () => {
        expect(subarraysWithKDistinct([1, 1, 1, 1, 1], 1)).toBe(15)
    })
    it("4", () => {
        expect(subarraysWithKDistinct([1, 1, 1, 1, 1], 2)).toBe(0)
    })
})