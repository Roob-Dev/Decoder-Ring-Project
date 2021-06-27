const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should encode string correctly", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    })

    it("should ignore spaces", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("Hello world");
        expect(actual).to.equal(expected);
    })

    it("should decode correctly, including spaces", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    })

    it("should decode the letters i/j correctly", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    })

    it("should make sure that when decoding, provided characters are even", () => {
        const expected = false;
        const actual = polybius("44324233521254134", false);
        expect(actual).to.equal(expected);
    })
  
    it("should handle spaces in multiple places", () => {
        const expected = "r ub y   s";
        const actual = polybius("24 5421 45  34", false);
        expect(actual).to.equal(expected);
    })
});
