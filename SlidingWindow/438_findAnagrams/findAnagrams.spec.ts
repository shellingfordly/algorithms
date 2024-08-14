import { findAnagrams, findAnagrams1, findAnagrams2 } from "./findAnagrams";

describe("findAnagrams", () => {
    it("1", () => {
        expect(findAnagrams("cbaebabacd", "abc").toString()).toBe([0, 6].toString())
        expect(findAnagrams("abab", "ab").toString()).toBe([0, 1, 2].toString())
        expect(findAnagrams("a", "abcd").toString()).toBe([].toString())
    })
})


describe("findAnagrams1", () => {
    it("1", () => {
        expect(findAnagrams1("cbaebabacd", "abc").toString()).toBe([0, 6].toString())
        expect(findAnagrams1("abab", "ab").toString()).toBe([0, 1, 2].toString())
        expect(findAnagrams1("a", "abcd").toString()).toBe([].toString())
    })
})


describe("findAnagrams2", () => {
    it("1", () => {
        expect(findAnagrams2("cbaebabacd", "abc").toString()).toBe([0, 6].toString())
        // expect(findAnagrams2("abab", "ab").toString()).toBe([0, 1, 2].toString())
        // expect(findAnagrams2("a", "abcd").toString()).toBe([].toString())
    })
})