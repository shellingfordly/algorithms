import { shortestSeq } from "./shortestSeq";

describe("shortestSeq", () => {
    it("1", () => {
        expect(shortestSeq([7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7], [1, 5, 9]).toString()).toBe([7, 10].toString())
    })

    it("2", () => {
        expect(shortestSeq([1, 2, 3], [4]).toString()).toBe([].toString())
        expect(shortestSeq([], [1]).toString()).toBe([].toString())
    })

    it("3", () => {
        expect(shortestSeq([1, 2, 2, 2, 3], [1, 2, 3]).toString()).toBe([0, 4].toString())
    })

    it("4", () => {
        expect(shortestSeq([1, 2, 1, 2, 1, 2], [1, 2]).toString()).toBe([0, 1].toString())
    })
})