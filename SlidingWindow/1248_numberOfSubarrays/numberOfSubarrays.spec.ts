import { numberOfSubarrays, numberOfSubarrays1 } from "./numberOfSubarrays"


describe("numberOfSubarrays", () => {
    it("1", () => {
        expect(numberOfSubarrays([1, 1, 2, 1, 1], 3)).toBe(2)
    })

    it("2", () => {
        expect(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)).toBe(16)
    })
})

describe("numberOfSubarrays1", () => {
    it("1", () => {
        expect(numberOfSubarrays1([1, 1, 2, 1, 1], 3)).toBe(2)
    })

    it("2", () => {
        expect(numberOfSubarrays1([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)).toBe(16)
    })
})