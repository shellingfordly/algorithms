import { nextGreatestLetter } from "./nextGreatestLetter"


describe("nextGreatestLetter", () => {
    it("1", () => {
        expect(nextGreatestLetter(["c", "f", "j"], "a")).toBe("c")
    })
    it("2", () => {
        expect(nextGreatestLetter(["c", "f", "j"], "c")).toBe("f")
    })
    it("3", () => {
        expect(nextGreatestLetter(["x","x","y","y"], "z")).toBe("x")
    })
    it("4", () => {
        expect(nextGreatestLetter(["x","x","y","y"], "x")).toBe("y")
    })
    it("5", () => {
        expect(nextGreatestLetter(["x","x","y","y"], "y")).toBe("x")
    })
    it("6", () => {
        expect(nextGreatestLetter(["x","x","y","y"], "q")).toBe("x")
    })
})