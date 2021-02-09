// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
let theRealAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let cypher = [];
  function substitution(input, alphabet, encode = true) {
    
    if (!alphabet || alphabet.length !== 26) return false;
    let checkforDupes = new Set(alphabet)
    if ([...checkforDupes].length !== 26) return false;
    alphabet.split('');
    if (encode) {
      for (let i = 0; i < 25; i++) {
        cypher[theRealAlphabet[i]] =  alphabet[i]
      }
    } else {
      for (let i = 0; i < 25; i++) {
        cypher[alphabet[i]] =  theRealAlphabet[i]
      }
    }
    let answer = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return cypher[letter]
    })
    return answer.join('')
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;