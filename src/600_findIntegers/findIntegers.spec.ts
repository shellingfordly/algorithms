import { findIntegers } from "./findIntegers";

describe("findIntegers", () => {
    it("1", () => {
        expect(
            findIntegers(0)
        ).toBe(1);
        expect(
            findIntegers(1)
        ).toBe(2);
        expect(
            findIntegers(2)
        ).toBe(3);
        expect(
            findIntegers(3)
        ).toBe(3);
        expect(
            findIntegers(4)
        ).toBe(4);
        expect(
            findIntegers(5)
        ).toBe(5);
    })

    it("2", ()=>{
        expect(
            findIntegers(100000000)
        ).toBe(514229);
    })
})