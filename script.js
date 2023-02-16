// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function that asks user for various inputs (password length, types of characters, etc)
//and builds a string based on those inputs
function generatePassword() {
  var passwordLength = prompt("How long do you want your password?");
  console.log(passwordLength);

}
