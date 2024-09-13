import { waysToSplit } from "./waysToSplit"

describe("waysToSplit", () => {
    it("1", () => {
        expect(waysToSplit([1, 1, 1])).toBe(1)
    })
    it("2", () => {
        expect(waysToSplit([1, 2, 2, 2, 5, 0])).toBe(3)
    })
    it("3", () => {
        expect(waysToSplit([3, 2, 1])).toBe(0)
    })
    it("4", () => {
        expect(waysToSplit([0, 3, 3])).toBe(1)
    })
})