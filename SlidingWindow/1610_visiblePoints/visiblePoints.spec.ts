import { visiblePoints } from "./visiblePoints"

describe("visiblePoints", () => {
    it("1", () => {
        expect(visiblePoints([[2, 1], [2, 2], [3, 3]], 90, [1, 1])).toBe(3)
    })

    it("2", () => {
        expect(visiblePoints([[0, 0], [0, 2]], 90, [1, 1])).toBe(2)
    })
})
