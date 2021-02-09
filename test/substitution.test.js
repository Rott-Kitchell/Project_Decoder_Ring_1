let substitution = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should encode a message by using the given substitution alphabet",() => {
        const expected = 'jrufscpw';
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("should have all unique parameters",() => {
        const actual = substitution("You are an excellent spy", "abcabcabcabcabcabcabcabcab");
        expect(actual).to.be.false;
    });
})