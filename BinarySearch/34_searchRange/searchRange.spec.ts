import { search, searchRange, searchRange1, searchRange2, searchRange3 } from "./searchRange"

describe("search", () => {
    it("1", () => {
        expect(search([1, 2, 3, 4], 2)).toBe(1)
        expect(search([1, 2, 3, 4], 3)).toBe(2)
        expect(search([1, 2, 3, 4, 5], 3)).toBe(2)
        expect(search([1, 2, 3, 4, 5], 6)).toBe(-1)
    })
})



describe("searchRange", () => {
    it("1", () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8).toString()).toBe([3, 4].toString())
        expect(searchRange([5, 8, 8, 10, 12, 13], 8).toString()).toBe([1, 2].toString())
    })
    it("2", () => {
        expect(searchRange([7, 7, 8, 8, 10, 10], 8).toString()).toBe([2, 3].toString())
    })
    it("3", () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8).toString()).toBe([3, 4].toString())
    })
    it("4", () => {
        expect(searchRange([], 0).toString()).toBe([-1, -1].toString())
        expect(searchRange([1, 2, 3], 0).toString()).toBe([-1, -1].toString())
    })
    it("5", () => {
        expect(searchRange([1], 1).toString()).toBe([0, 0].toString())
    })
})


describe("searchRange1", () => {
    it("1", () => {
        expect(searchRange1([5, 7, 7, 8, 8, 10], 8).toString()).toBe([3, 4].toString())
        expect(searchRange1([5, 8, 8, 10, 12, 13], 8).toString()).toBe([1, 2].toString())
    })
    it("2", () => {
        expect(searchRange1([7, 7, 8, 8, 10, 10], 8).toString()).toBe([2, 3].toString())
    })
    it("3", () => {
        expect(searchRange1([5, 7, 7, 8, 8, 10], 8).toString()).toBe([3, 4].toString())
    })
    it("4", () => {
        expect(searchRange1([], 0).toString()).toBe([-1, -1].toString())
        expect(searchRange1([1, 2, 3], 0).toString()).toBe([-1, -1].toString())
    })
    it("5", () => {
        expect(searchRange1([1], 1).toString()).toBe([0, 0].toString())
    })
})


describe("searchRange2", () => {
    it("1", () => {
        expect(searchRange2([5, 7, 7, 8, 8, 10], 8).toString()).toBe([3, 4].toString())
        expect(searchRange2([5, 8, 8, 10, 12, 13], 8).toString()).toBe([1, 2].toString())
    })
    it("2", () => {
        expect(searchRange2([7, 7, 8, 8, 10, 10], 8).toString()).toBe([2, 3].toString())
    })
    it("3", () => {
        expect(searchRange2([5, 7, 7, 8, 8, 10], 8).toString()).toBe([3, 4].toString())
    })
    it("4", () => {
        expect(searchRange2([], 0).toString()).toBe([-1, -1].toString())
        expect(searchRange2([1], 2).toString()).toBe([-1, -1].toString())
        expect(searchRange2([1, 2, 3], 0).toString()).toBe([-1, -1].toString())
    })
    it("5", () => {
        expect(searchRange2([1], 1).toString()).toBe([0, 0].toString())
        expect(searchRange2([1], 2).toString()).toBe([-1, -1].toString())
    })
})




describe("searchRange3", () => {
    it("1", () => {
        expect(searchRange3([5, 7, 7, 8, 8, 10], 8).toString()).toBe([3, 4].toString())
        expect(searchRange3([5, 8, 8, 10, 12, 13], 8).toString()).toBe([1, 2].toString())
    })
    it("2", () => {
        expect(searchRange3([7, 7, 8, 8, 10, 10], 8).toString()).toBe([2, 3].toString())
    })
    it("3", () => {
        expect(searchRange3([5, 7, 7, 8, 8, 10], 8).toString()).toBe([3, 4].toString())
    })
    it("4", () => {
        expect(searchRange3([], 0).toString()).toBe([-1, -1].toString())
        expect(searchRange3([1], 2).toString()).toBe([-1, -1].toString())
        expect(searchRange3([1, 2, 3], 0).toString()).toBe([-1, -1].toString())
    })
    it("5", () => {
        expect(searchRange3([1], 1).toString()).toBe([0, 0].toString())
        expect(searchRange3([1], 2).toString()).toBe([-1, -1].toString())
    })
})