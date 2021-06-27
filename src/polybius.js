// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
    const letters = ["a","b","c","d","e","f","g","h","(i/j)",
    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const numbers = ["11","21","31","41","51","12","22","32","42","52",
    "13","23","33","43","53","14","24","34","44","54","15","25","35","45","55"];
  
   
    //verify that incoming text is a string
    if(!input) return false;
  
     let finalPhrase = "";
  
     if (encode === true){
       finalPhrase = _toEncode(input,finalPhrase,letters,numbers);
     }else{
      //create a string variable without spaces 
      const evenCheck = input.split(" ").join("");
      
        //check to see if input string is even by checking if the length is an even number
        if (evenCheck.length % 2 !== 0){
          //if not even then return false
          return false;
        }
        finalPhrase = _toDecode(input,finalPhrase,letters,numbers);
     }
  
     return finalPhrase;
  
  }
  //helper function to encode
   function _toEncode(input,finalPhrase,letters,numbers) {
  
    let lowered = input.toLowerCase();
    //create array of lower-case letters 
    const wordArray =[...lowered]
  
    //initialize a variable for the current index
    let currentPos = 0;
  
    //encoding process
      wordArray.forEach((char) => {  
        
        if(!char.match(/[a-z]/)){ //check if there's special characters like a space
        finalPhrase += char; return // if there is, then ignore it
        }
    
        //check if char is i or j
        if (char === "i"|| char === "j"){
          currentPos = 8;
        }else{ //if not i or j, then get the current 
          currentPos = letters.indexOf(char);
        }
        
        finalPhrase += numbers[currentPos];
      })
      return finalPhrase
    }
  
    //helper function to decode
    function _toDecode(input,finalPhrase,letters,numbers) {
      // if we get this far, then input was eve
      let spacedOut = [...input] //creating an array of all the characters in input
  
      //  to fix the issue of having one space, let's make it a double space so it groups well
      // REMEMBER to remove this space later
     for (let i = 0; i < spacedOut.length; i++){
       if (spacedOut[i] === " "){
        spacedOut.splice((i+1),0," ")
         i++;
       }
     }
   
     let tempVar = spacedOut.join(""); //converting back to a string.. yay
     
  
     let wordArray = tempVar.match(/.{1,2}/g)  //group chars together into groups of 2
     
  
       wordArray.forEach((char) => { //this is where all the magic starts to happen
        //initialize a variable for the current index 
        let currentPos = 0;
  
        if(!char.match(/[1-9]/)){ //check if there's special characters like a space
        finalPhrase += char; return // if there is, then ignore it
        }
        
        //check if char is 52
        if (char === '42'){
          currentPos = 8; //52 should be the same index as i/j
        } else { 
          currentPos = numbers.indexOf(char);// current position is the index in numbers that matches char
        }
        //change the double space back to a single space
        finalPhrase = finalPhrase.replace("  ", " ")
        finalPhrase += letters[currentPos];
        
      })
      return finalPhrase
    }
  
    return {
      polybius,
    };
  })();
  
  module.exports = { polybius: polybiusModule.polybius };
  