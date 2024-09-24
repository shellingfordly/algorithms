
import { successfulPairs, successfulPairs1 } from "./successfulPairs"
import { potions, spells, result } from "./data"

describe("successfulPairs", () => {
    it("1", () => {
        expect(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7).toString()).toBe([4, 0, 3].toString())
    })
    it("2", () => {
        expect(successfulPairs(spells, potions, 5433930978).toString()).toBe(result.toString())
    })
})

describe("successfulPairs1", () => {
    it("1", () => {
        expect(successfulPairs1([5, 1, 3], [1, 2, 3, 4, 5], 7).toString()).toBe([4, 0, 3].toString())
    })
    it("2", () => {
        expect(successfulPairs1(spells, potions, 5433930978).toString()).toBe(result.toString())
    })
})
