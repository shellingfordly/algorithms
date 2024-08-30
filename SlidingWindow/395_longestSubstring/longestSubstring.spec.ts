import { longestSubstring } from "./longestSubstring";

describe("longestSubstring", () => {
    it("1", () => {
        expect(longestSubstring("aaabb", 3)).toBe(3)
    })

    it("2", () => {
        expect(longestSubstring("abbbcccd", 3)).toBe(6)
    })

    it("3", () => {
        expect(longestSubstring("abccbb", 3)).toBe(0)
        expect(longestSubstring("abccbbc", 3)).toBe(6)
        expect(longestSubstring("abccbb", 2)).toBe(5)
    })

    it("4", ()=>{
        expect(longestSubstring("bbaaacbd", 3)).toBe(3)
    })
})