import { incremovableSubarrayCount } from "./incremovableSubarrayCount"

describe("incremovableSubarrayCount", () => {
    // it("1", () => {
    //     expect(incremovableSubarrayCount([1, 2, 3, 4])).toBe(10)
    // })
    // it("2", () => {
    //     expect(incremovableSubarrayCount([6, 5, 7, 8])).toBe(7)
    // })
    // it("3", () => {
    //     expect(incremovableSubarrayCount([8, 7, 6, 6])).toBe(3)
    // })
    it("4", () => {
        expect(incremovableSubarrayCount([1, 2, 3, 1, 2])).toBe(7)
    })
})