// Assignment Code
var passwordObj = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var passwordPrompts = function() {
  passwordLength();
  console.log(passwordObj.length);
};

var passwordLength = function () {
  passwordObj.length = window.prompt("Length of password?");
  passwordObj.length = parseInt(passwordObj.length);
  if(isNaN(passwordObj.length)) {
    window.alert("Please enter a number.");
    passwordLength();
  }
  else if(passwordObj.length < 8 || passwordObj.length > 128) {
    window.alert("Please enter a number between 8 and 128");
    passwordLength();
  }
}

var generatePassword = function() {
  passwordPrompts();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 