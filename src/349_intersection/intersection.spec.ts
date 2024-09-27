import { intersection, intersection1, intersection2, intersection3 } from "./intersection"

describe("intersection", () => {
    it("1", () => {
        expect(intersection([1, 2, 2, 1], [2, 2]).toString()).toBe([2].toString())
    })
    it("2", () => {
        expect(intersection([4, 9, 5], [9, 4, 9, 8, 4]).toString()).toBe([4, 9].toString())
    })
    it("3", () => {
        expect(intersection([1], [3]).toString()).toBe([].toString())
    })
})

describe("intersection1", () => {
    it("1", () => {
        expect(intersection1([1, 2, 2, 1], [2, 2]).toString()).toBe([2].toString())
    })
    it("2", () => {
        expect(intersection1([4, 9, 5], [9, 4, 9, 8, 4]).toString()).toBe([4, 9].toString())
    })
    it("3", () => {
        expect(intersection1([1], [3]).toString()).toBe([].toString())
    })
})

describe("intersection2", () => {
    it("1", () => {
        expect(intersection2([1, 2, 2, 1], [2, 2]).toString()).toBe([2].toString())
    })
    it("2", () => {
        expect(intersection2([4, 9, 5], [9, 4, 9, 8, 4]).toString()).toBe([4, 9].toString())
    })
    it("3", () => {
        expect(intersection2([1], [3]).toString()).toBe([].toString())
    })
})


describe("intersection3", () => {
    it("1", () => {
        expect(intersection3([1, 2, 2, 1], [2, 2]).toString()).toBe([2].toString())
    })
    it("2", () => {
        expect(intersection3([4, 9, 5], [9, 4, 9, 8, 4]).toString()).toBe([4, 9].toString())
    })
    it("3", () => {
        expect(intersection3([1], [3]).toString()).toBe([].toString())
    })
})