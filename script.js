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
  //get length
  var passwordLength = prompt("How long do you want your password?");

  //get booleans to determine which characters should be used
  var useUppercase = confirm("Do you want to use uppercase letters?");
  var useLowercase = confirm("Do you want to use lowercase letters?");
  var useSpecial = confirm("Do you want to use special characters?");
}
