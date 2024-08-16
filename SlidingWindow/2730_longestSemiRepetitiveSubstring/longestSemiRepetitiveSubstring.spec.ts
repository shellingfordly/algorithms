import { longestSemiRepetitiveSubstring } from "./longestSemiRepetitiveSubstring";

describe("longestSemiRepetitiveSubstring", () => {
    it("1", () => {
        expect(longestSemiRepetitiveSubstring("1234")).toBe(4)
    })
    it("2", () => {
        expect(longestSemiRepetitiveSubstring("12344")).toBe(5)
    })
    it("3", () => {
        expect(longestSemiRepetitiveSubstring("52233")).toBe(4)
    })
    it("4", () => {
        expect(longestSemiRepetitiveSubstring("1111111")).toBe(2)
    })
    it("5", () => {
        expect(longestSemiRepetitiveSubstring("110123488")).toBe(8)
    })
    it("6", () => {
        expect(longestSemiRepetitiveSubstring("11012348834566")).toBe(12)
    })
    it("7", () => {
        expect(longestSemiRepetitiveSubstring("1101234883456678901233")).toBe(13)
    })
    it("8", () => {
        expect(longestSemiRepetitiveSubstring("1101234883456")).toBe(12)
    })
    it("9", () => {
        expect(longestSemiRepetitiveSubstring("110188123456678912")).toBe(13)
    })
})