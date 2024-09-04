import { numberOfSubstrings } from "./numberOfSubstrings";

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