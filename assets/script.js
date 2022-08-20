// Assignment Code
// Element selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// different user choices
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var specialChar = "!@#$%&'()*+,-./:;<=>?@[]^_`{|}~]".split("");
var allArray = [specialChar, upperCase, lowerCase, numbers];

// Write password to the #password input
function writePassword() {
  // asks user to chose what they want to include
  var InLowercase = confirm("include lower case?");
  var InUppercase = confirm("include upper case?");
  var InNumbers = confirm("include numbers?");
  var InSpecial = confirm("include special characters?");
  
  // activates pasword generator
  var password = generatePassword();

  passwordText.textContent = password;

  function generatePassword() {

    if (InLowercase === false) {
      lowerCase = "";
    }
    if (InUppercase === false) {
      upperCase = "";
    }
    if (InNumbers === false) {
      numbers = "";
    }
    if (InSpecial === false) {
      specialChar = "";
    }
    console.log(allArray)
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
