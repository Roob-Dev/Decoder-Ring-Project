const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should encode string correctly", () => {
        const expected = 'jrufscpw';
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
  
    it("should return spaces correctly", () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
  
    it("should decode message correctly", () => {
        const expected = 'thinkful';
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    })
  
    it("should encode string correctly", () => {
        const expected = 'y&ii$r&';
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    })
  
    it("should decode string correctly", () => {
        const expected = 'message';
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    })
  
    it("should return false if key is not long enough", () => {
        const expected = false;
        const actual = substitution("thinkful", "short");
        expect(actual).to.equal(expected);
    })
  
    it("should return false if the key has duplicate letters", () => {
        const expected = false;
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    })
})
