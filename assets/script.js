// Assignment Code
// Element selectors
var generateBtn = document.querySelector("#generate");
// different user choices
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!@#$%&'()*+,-./:;<=>?@[]^_`{|}~]";
var minChars = 8;
var maxChars = 128;
// Write password to the #password input
function generatePassword() {
  // empty variable to hold all of the choices the user wants
  var possibleChars = "";

  var passwordLength = parseInt(
    prompt(
      "How long would you like your password? please choose between 8 and 128."
    )
  );
  // makes sure the password length is within the min and maximum
  if (
    passwordLength < minChars ||
    passwordLength > maxChars ||
    isNaN(passwordLength)
  ) {
    alert("Invalid password length entered.");
    return;
  }
  // asks users what types of characters they would like in there password
  var InLowercase = confirm("Would you like to include lower case?");
  var InUppercase = confirm("Would you like to include upper case?");
    var InNumbers = confirm("Would you like to include numbers?");
  var InSpecial = confirm("Would you like to include special characters?");
  if (InLowercase) {
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }
  if (InUppercase) {
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
  }
  if (InSpecial) {
    password += specialChar[Math.floor(Math.random() * specialChar.length)];
  }
  if (InNumbers) {
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }
  var password = ""; 
  // makes sure the user choses at least one option
  if (!InLowercase && !InUppercase && !InSpecial && !InNumbers) {
    alert("Please choose at least one character style.");
    return;
  }
  // adds the selected characters to the list of possible characters
  if (InLowercase) {
    possibleChars += lowerCase;
  }
  if (InUppercase) {
    possibleChars += upperCase;
  }
  if (InSpecial) {
    possibleChars += specialChar;
  }
  if (InNumbers) {
    possibleChars += numbers;
  }
  console.log(possibleChars);
  var currentPasswordLength = password.length; // variable to include in formula below to offset "extra" characters in the password field, as *above* formula will add 1 for each type selected, automatically. So, it needs to be as below:
  for (i = 0; i < passwordLength - currentPasswordLength; i++) {
    password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
  }
  console.log(password);
  return password;
}

function writePassword() {
  // generates and writes the password with all the different choices they want to include
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
