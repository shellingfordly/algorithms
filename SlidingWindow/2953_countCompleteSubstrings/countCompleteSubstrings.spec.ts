import { countCompleteSubstrings } from "./countCompleteSubstrings"


//a b c d e f g h i j l m n o p q r s t u v w x y z

describe("countCompleteSubstrings", () => {
    it("1", () => {
        expect(countCompleteSubstrings("igigee", 2)).toBe(3)
    })
    it("2", () => {
        expect(countCompleteSubstrings("aaabbbccc", 3)).toBe(6)
    })
    it("3", () => {
        expect(countCompleteSubstrings("rargaa", 6)).toBe(0)
    })
    it("4", () => {
        expect(countCompleteSubstrings("abc", 1)).toBe(6)
    })
    it("5", () => {
        expect(countCompleteSubstrings("lxpzxlpxpxllxzxpzxlpzxpppxlpxlxpxpzppzzplzzllxlplpppllllplllzzxzllpll", 1)).toBe(76)
    })
})