import { longestNiceSubstring, longestNiceSubstring1 } from "./longestNiceSubstring";

describe("longestNiceSubstring", () => {
    it("1", () => {
        expect(longestNiceSubstring("YazaAay")).toBe("aAa")
    })
    it("2", () => {
        expect(longestNiceSubstring("Bb")).toBe("Bb")
    })
    it("3", () => {
        expect(longestNiceSubstring("C")).toBe("")
    })
    it("4", () => {
        expect(longestNiceSubstring("dDzeE")).toBe("dD")
    })
    it("4", () => {
        expect(longestNiceSubstring("XqLJWaEEcAjslIXxKZgufikxFwVVYUlvYrIeGRyS")).toBe("Xx")
    })
})

describe("longestNiceSubstring1", () => {
    it("1", () => {
        expect(longestNiceSubstring1("YazaAay")).toBe("aAa")
    })
    it("2", () => {
        expect(longestNiceSubstring1("Bb")).toBe("Bb")
    })
    it("3", () => {
        expect(longestNiceSubstring1("C")).toBe("")
    })
    it("4", () => {
        expect(longestNiceSubstring1("dDzeE")).toBe("dD")
    })
    it("4", () => {
        expect(longestNiceSubstring1("XqLJWaEEcAjslIXxKZgufikxFwVVYUlvYrIeGRyS")).toBe("Xx")
    })
})