import { numberOfSubstrings, numberOfSubstrings1 } from "./numberOfSubstrings";

describe("numberOfSubstrings", () => {
    it("1", () => {
        expect(numberOfSubstrings("abcabc")).toBe(10)
    })
    it("2", () => {
        expect(numberOfSubstrings("aaacb")).toBe(3)
    })
    it("3", () => {
        expect(numberOfSubstrings("abc")).toBe(1)
    })
})

describe("numberOfSubstrings1", () => {
    it("1", () => {
        expect(numberOfSubstrings1("abcabc")).toBe(10)
    })
    it("2", () => {
        expect(numberOfSubstrings1("aaacb")).toBe(3)
    })
    it("3", () => {
        expect(numberOfSubstrings1("abc")).toBe(1)
    })
})