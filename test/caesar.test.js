const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

//will need a test to check if no letter is given
describe("caesar", () => {
    //-------------testing shift-------------
    it("should make sure the shift is provided ", () => {
        const expected = false;
        const actual = caesar("thinkful");
        expect(actual).to.equal(expected);

    })

    it("should make sure the shift is less than 25 ", () => {
        const expected = false;
        const actual = caesar("thinkful", 99);
        expect(actual).to.equal(expected);   
    })

    it("should make sure the shift is more than -25", () => {
        const expected = false;
        const actual = caesar("thinkful", -26);
        expect(actual).to.equal(expected);        
    })


    //-------------testing input-------------
    it("should make sure input is provided ", () => {
        const expected = false;
        const actual = caesar("thinkful", -26);
        expect(actual).to.equal(expected);   
    })

    //-------------testing output-------------
    it("should return lower-case output ", () => {
        const expected = 'this is a secret message!';
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);  
    })

    it("should ignore spaces and other characters ", () => {
        const expected = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);  
    })

    it("should decode input text, and also wrap around", () => {
        const expected = 'thinkful';
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected);  
    })

    it("should encoded input text with a negative shift value", () => {
        const expected = 'qefkhcri';
        const actual = caesar("thinkful", -3);
        expect(actual).to.equal(expected);  
    })

    it("should encode input text with a positive shift value", () => {
        const expected = 'wklqnixo';
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);  
    })

});
