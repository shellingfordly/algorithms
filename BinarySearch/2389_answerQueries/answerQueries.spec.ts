import { answerQueries, answerQueries1 } from "./answerQueries"

describe("answerQueries", () => {
    it("1", () => {
        expect(answerQueries([4, 5, 2, 1], [3, 10, 21]).toString()).toBe([2, 3, 4].toString())
    })

    it("2", () => {
        expect(answerQueries([2, 3, 4, 5], [1]).toString()).toBe([0].toString())
    })

    it("3", () => {
        expect(answerQueries([1, 1, 1, 1], [1, 2, 3, 4]).toString()).toBe([1, 2, 3, 4].toString())
        expect(answerQueries([2, 2, 2, 2], [1, 2, 3, 4]).toString()).toBe([0, 1, 1, 2].toString())
    })

    it("4", () => {
        expect(answerQueries([736411, 184882, 914641, 37925, 214915], [331244, 273144, 118983, 118252, 305688, 718089, 665450]).toString()).toBe([2, 2, 1, 1, 2, 3, 3].toString())
    })
})


describe("answerQueries1", () => {
    it("1", () => {
        expect(answerQueries1([4, 5, 2, 1], [3, 10, 21]).toString()).toBe([2, 3, 4].toString())
    })

    it("2", () => {
        expect(answerQueries1([2, 3, 4, 5], [1]).toString()).toBe([0].toString())
    })

    it("3", () => {
        expect(answerQueries1([1, 1, 1, 1], [1, 2, 3, 4]).toString()).toBe([1, 2, 3, 4].toString())
        expect(answerQueries1([2, 2, 2, 2], [1, 2, 3, 4]).toString()).toBe([0, 1, 1, 2].toString())
    })

    it("4", () => {
        expect(answerQueries1([736411, 184882, 914641, 37925, 214915], [331244, 273144, 118983, 118252, 305688, 718089, 665450]).toString()).toBe([2, 2, 1, 1, 2, 3, 3].toString())
    })
})