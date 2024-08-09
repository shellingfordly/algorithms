import { maxScore, maxScore1 } from "./maxScore";


describe("maxScore", () => {


    it("1", () => {
        expect(maxScore([1, 2, 3, 4, 5, 6, 1], 3)).toBe(12)
        expect(maxScore([2, 2, 2], 2)).toBe(4)
        expect(maxScore([9, 7, 7, 9, 7, 7, 9], 7)).toBe(55)
        expect(maxScore([1, 1000, 1], 1)).toBe(1)
        expect(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3)).toBe(202)
        expect(maxScore([1, 2, 3, 79, 80, 200, 1, 1, 1], 5)).toBe(283)
    })

    it("2", () => {
        expect(maxScore([100, 2, 3, 79, 80, 200, 1, 1, 1], 5)).toBe(303)
        expect(maxScore([100, 90, 2, 3, 79, 80, 200, 1, 1], 5)).toBe(392)

    })

})

describe("maxScore1", () => {


    it("1", () => {
        expect(maxScore1([1, 2, 3, 4, 5, 6, 1], 3)).toBe(12)
        expect(maxScore1([2, 2, 2], 2)).toBe(4)
        expect(maxScore1([9, 7, 7, 9, 7, 7, 9], 7)).toBe(55)
        expect(maxScore1([1, 1000, 1], 1)).toBe(1)
        expect(maxScore1([1, 79, 80, 1, 1, 1, 200, 1], 3)).toBe(202)
        expect(maxScore1([1, 2, 3, 79, 80, 200, 1, 1, 1], 5)).toBe(283)
    })

    it("2", () => {
        expect(maxScore1([100, 2, 3, 79, 80, 200, 1, 1, 1], 5)).toBe(303)
        expect(maxScore1([100, 90, 2, 3, 79, 80, 200, 1, 1], 5)).toBe(392)

    })

})