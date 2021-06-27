// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //alphabet is whatever the user sends in to use as the "key"
    //input is what they want encoded or decoded
    if (!alphabet || alphabet.length < 25 || alphabet.length > 26) return false;
    
    const letters = ["a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


    for (let i=0; i < alphabet.length; i++) {
      if ( alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i]) ) {
        return false;
      }
    }


    //convert key into an array
    let keyArray = [...alphabet];
    
    if(!input) return false;

   let finalPhrase = "";

   if (encode === true){
     finalPhrase = _toEncode(input,finalPhrase,letters,keyArray);
   }else{
      finalPhrase = _toDecode(input,finalPhrase,letters,keyArray);
   }

   return finalPhrase;

}

//helper function to encode
 function _toEncode(input,finalPhrase,letters,keyArray) {
  
  let lowered = input.toLowerCase();
  //create array of lower-case letters 
  const wordArray =[...lowered]

  //initialize a variable for the current index
  let currentPos = 0;

  wordArray.forEach((char) => {  
    if(!char.match(/[a-z]/)){ //check if there's special characters like a space
    finalPhrase += char; return // if there is, then ignore it
    }

    currentPos = letters.indexOf(char);
    finalPhrase += keyArray[currentPos];
  })
  return finalPhrase
}
  
function _toDecode(input,finalPhrase,letters,keyArray) {
  
  let lowered = input.toLowerCase();
  //create array of lower-case letters 
  const wordArray =[...lowered]

  //initialize a variable for the current index
  let currentPos = 0;

  wordArray.forEach((char) => {  
    if(char === " "){ //check if there's special characters like a space
    finalPhrase += char; return // if there is, then ignore it
    }

    currentPos = keyArray.indexOf(char);
    finalPhrase += letters[currentPos];
  })
  return finalPhrase
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
