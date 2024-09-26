
import { countNegatives, countNegatives3 } from "./countNegatives";

describe("countNegatives", () => {
    it("1", () => {
        const arr = [
            [4, 3, 2, -1],
            [3, 2, 1, -1],
            [1, 1, -1, -2],
            [-1, -1, -2, -3]
        ]
        expect(countNegatives(arr)).toBe(8)
    })

    it("2", () => {
        expect(countNegatives([[3, 2], [1, 0]])).toBe(0)
    })

    it("3", () => {
        expect(countNegatives([[5, 1, 0], [-5, -5, -5]])).toBe(3)
    })
})

describe("countNegatives3", () => {
    it("1", () => {
        const arr = [
            [4, 3, 2, -1],
            [3, 2, 1, -1],
            [1, 1, -1, -2],
            [-1, -1, -2, -3]
        ]
        expect(countNegatives3(arr)).toBe(8)
    })

    it("2", () => {
        expect(countNegatives3([[3, 2], [1, 0]])).toBe(0)
    })

    it("3", () => {
        expect(countNegatives3([[5, 1, 0], [-5, -5, -5]])).toBe(3)
    })

})