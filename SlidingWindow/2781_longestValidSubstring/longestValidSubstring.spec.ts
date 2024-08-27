import { longestValidSubstring } from "./longestValidSubstring";

describe("longestValidSubstring", () => {
    it("1", () => {
        expect(longestValidSubstring("cbaaaabc", ["aaa", "cb"])).toBe(4)
    })
    it("2", () => {
        expect(longestValidSubstring("leetcode", ["de", "le", "e"])).toBe(4)
    })
    it("3", () => {
        expect(longestValidSubstring("baabb", ["bcbcb", "aab", "baab", "cbc"])).toBe(3)
    })
})