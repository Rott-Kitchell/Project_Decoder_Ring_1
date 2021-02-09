// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) return false;
    if (encode === false) shift = shift - (shift * 2);
    let conversion = input.toLowerCase();
    let newCode = [...conversion].map((i) => {
      let convNum = i.charCodeAt();
      if (convNum < 97 || convNum > 122) return String.fromCharCode(convNum);
      let newNum = convNum + shift;
      if (newNum < 97) newNum += 26;
      if (newNum > 122) newNum -= 26;
      return String.fromCharCode(newNum);
    });
    return newCode.join("");
  };

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
