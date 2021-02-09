let polybius = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
    it("should encode a message by translating each letter to number pairs",() => {
        const expected = '23513434112251';
        const actual = polybius("message");
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is when encoding",() => {
        const expected = '2345 23513434112251';
        const actual = polybius("my message");
        expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const expected = '424222221351';
        const actual = polybius("jiggle");
        expect(actual).to.equal(expected);
    })
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const expected = "message";
        const actual = polybius('23513434112251', false);
        expect(actual).to.equal(expected);
    })
    it("should leave spaces as is when decoding", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    })
}); 