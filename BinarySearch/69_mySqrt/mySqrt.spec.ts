import { mySqrt } from "./mySqrt"

// /0 <= x <= 231 - 1

describe("mySqrt", () => {
    it("1", () => {
        expect(mySqrt(0)).toBe(0)
        expect(mySqrt(2)).toBe(1)
        expect(mySqrt(4)).toBe(2)
        expect(mySqrt(8)).toBe(2)
        expect(mySqrt(12)).toBe(3)
        expect(mySqrt(11)).toBe(3)
        expect(mySqrt(13)).toBe(3)
    })
    it("2", () => {
        expect(mySqrt(1)).toBe(1)
    })
    it("3", () => {
        expect(mySqrt(1000032428)).toBe(31623)
    })
})