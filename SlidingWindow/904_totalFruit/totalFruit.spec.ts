import { totalFruit } from "./totalFruit";

describe("totalFruit", () => {
    it("1", () => {
        expect(totalFruit([1, 2, 1])).toBe(3)
    })
    it("2", () => {
        expect(totalFruit([1, 1, 1, 1])).toBe(4)
    })
    it("3", () => {
        expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toBe(5)
    })
    it("4", () => {
        expect(totalFruit([0, 1, 2, 2])).toBe(3)
    })
    it("5", () => {
        expect(totalFruit([1, 2, 3, 2, 2])).toBe(4)
    })
    it("6", () => {
        expect(totalFruit([])).toBe(0)
    })
    it("7", () => {
        expect(totalFruit([1])).toBe(1)
    })
    it("8", () => {
        expect(totalFruit([1, 2, 3, 4, 5])).toBe(2)
    })
    it("9", () => {
        expect(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3])).toBe(5)
    })
})