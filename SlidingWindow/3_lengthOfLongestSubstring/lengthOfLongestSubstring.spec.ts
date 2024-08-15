
import { lengthOfLongestSubstring, lengthOfLongestSubstring1 } from "./lengthOfLongestSubstring";

describe("lengthOfLongestSubstring", () => {
    it("1", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3)
    })
    it("2", () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1)
    })
    it("3", () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3)
    })
    it("4", () => {
        expect(lengthOfLongestSubstring("p")).toBe(1)
    })
    it("5", () => {
        expect(lengthOfLongestSubstring("pppppcb")).toBe(3)
    })
    it("6", () => {
        expect(lengthOfLongestSubstring("aaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbccccccccc")).toBe(2)
    })
    it("7", () => {
        expect(lengthOfLongestSubstring("cbaaabc")).toBe(3)
    })
    it("8", () => {
        expect(lengthOfLongestSubstring("bbbaaabc")).toBe(3)
    })
    it("9", () => {
        expect(lengthOfLongestSubstring("abcdef")).toBe(6)
    })
    it("9", () => {
        expect(lengthOfLongestSubstring("baalvabc")).toBe(5)
    })
})


describe("lengthOfLongestSubstring1", () => {
    it("1", () => {
        expect(lengthOfLongestSubstring1("abcabcbb")).toBe(3)
    })
    it("2", () => {
        expect(lengthOfLongestSubstring1("bbbbb")).toBe(1)
    })
    it("3", () => {
        expect(lengthOfLongestSubstring1("pwwkew")).toBe(3)
    })
    it("4", () => {
        expect(lengthOfLongestSubstring1("p")).toBe(1)
    })
    it("5", () => {
        expect(lengthOfLongestSubstring1("pppppcb")).toBe(3)
    })
    it("6", () => {
        expect(lengthOfLongestSubstring1("aaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbccccccccc")).toBe(2)
    })
    it("7", () => {
        expect(lengthOfLongestSubstring1("cbaaabc")).toBe(3)
    })
    it("8", () => {
        expect(lengthOfLongestSubstring1("bbbaaabc")).toBe(3)
    })
    it("9", () => {
        expect(lengthOfLongestSubstring1("abcdef")).toBe(6)
    })
    it("9", () => {
        expect(lengthOfLongestSubstring1("baalvabc")).toBe(5)
    })
})


