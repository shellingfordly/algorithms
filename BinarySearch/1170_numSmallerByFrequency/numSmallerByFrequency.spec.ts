import { numSmallerByFrequency, numSmallerByFrequency1 } from "./numSmallerByFrequency"

describe("numSmallerByFrequency", () => {
    it("1", () => {
        expect(numSmallerByFrequency(["a", "b", "c"], ["a", "b", "c"]).toString()).toBe([0, 0, 0].toString())
    })
    it("2", () => {
        const queries = ["bba", "abaaaaaa", "aaaaaa", "bbabbabaab", "aba", "aa", "baab", "bbbbbb", "aab", "bbabbaabb"]
        const words = ["aaabbb", "aab", "babbab", "babbbb", "b", "bbbbbbbbab", "a", "bbbbbbbbbb", "baaabbaab", "aa"]
        expect(numSmallerByFrequency(queries, words).toString()).toBe([6, 1, 1, 2, 3, 3, 3, 1, 3, 2].toString())
    })
})

describe("numSmallerByFrequency1", () => {
    it("1", () => {
        expect(numSmallerByFrequency(["a", "b", "c"], ["a", "b", "c"]).toString()).toBe([0, 0, 0].toString())
    })
    it("2", () => {
        const queries = ["bba", "abaaaaaa", "aaaaaa", "bbabbabaab", "aba", "aa", "baab", "bbbbbb", "aab", "bbabbaabb"]
        const words = ["aaabbb", "aab", "babbab", "babbbb", "b", "bbbbbbbbab", "a", "bbbbbbbbbb", "baaabbaab", "aa"]
        expect(numSmallerByFrequency1(queries, words).toString()).toBe([6, 1, 1, 2, 3, 3, 3, 1, 3, 2].toString())
    })
})