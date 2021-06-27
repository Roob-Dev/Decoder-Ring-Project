// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    //check shift
    if (!shift || shift < -25 || shift > 25 || shift === 0) return false;
    
    if (!input) {
      return false;
    }

    let finalPhrase = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    //change letters to lower case letters
    // let changedText = input.toLowerCase();
    let lowered = input.toLowerCase();
    // //convert string input into an array
     const wordArray = [...lowered];

//map through the newly created wordArray
     wordArray.forEach((char) => {
       if (!char.match(/[a-z]/)) { finalPhrase += char; return}  //for each character in the array, if it's a space or other char leave it as is
      
       let newPos;
       let currentPos = letters.indexOf(char); //find the index of the incoming character in relation to the letters array

       //shift + or - depending on wether it's being decoded or encoded
       if (encode === true) {
        newPos = (currentPos + shift) % letters.length;
       }

      else{
        newPos = (currentPos - shift) % letters.length;
      }
      //if the index is below 0, then subtract it from the length of the letter's array (26)
      if (newPos < 0 ) {
        newPos = (letters.length + newPos);
      }

      finalPhrase += letters[newPos];
    });
    return finalPhrase;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };