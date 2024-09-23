import { findTheDistanceValue } from "./findTheDistanceValue"


describe("findTheDistanceValue", () => {
    it("1", () => {


        expect(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)).toBe(1)
    })
})