let caesar = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () => {
    it("should encode a basic string properly using a shift",() => {
        const expected = 'wklqnixo';
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
        const actual = caesar("a !", 8);
        const expected = " "
        expect(actual.charAt(1)).to.equal(expected);
    });
    it("should leave special characters as is", () => {
        const actual = caesar("a !", 8);
        const expected = "!"
        expect(actual.charAt(2)).to.equal(expected);
    });
    it("should wrap characters around when going over 'z'", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.equal(expected);
    });
    it("should switch the direction of the shift if decoding", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!"
        expect(actual).to.equal(expected);
    });
    it("should return false if there is no shift value", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!");
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is greater than 25", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 75);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is less than -25", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", -63);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is 0", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 0);
        expect(actual).to.be.false; 
    });
    it("should ignore capitalization of letters", () => {
        const actual = caesar("XYZ", 1, false);
        const expected = "wxy"
        expect(actual).to.equal(expected);
    })

})