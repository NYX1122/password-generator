//objects and variables
var passwordObj = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false
};

var characterObj = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};

var password = "";


//handy functions
var decider = function() {
  var random = Math.floor(Math.random() * 4);
  return random;
}

var passwordPrompts = function() {
  passwordLength();
  console.log(passwordObj.length);
  booleanPasswordPrompts();
};

var booleanPasswordPrompts = function(){
  passwordLowercase();
  console.log(passwordObj.lowercase);

  passwordUppercase();
  console.log(passwordObj.uppercase);

  passwordNumeric();
  console.log(passwordObj.numeric);

  passwordSpecial();
  console.log(passwordObj.special);

  if(!passwordObj.lowercase && !passwordObj.uppercase && !passwordObj.numeric && !passwordObj.special) {
    window.alert("You're really looking for bugs aren't you? Try again XD")
    booleanPasswordPrompts();
  };
};


//prompts
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
  };
};

var passwordLowercase = function () {
  passwordObj.lowercase = window.confirm("Lowercase letters?");
};

var passwordUppercase = function () {
  passwordObj.uppercase = window.confirm("Uppercase letters?");
};

var passwordNumeric = function () {
  passwordObj.numeric = window.confirm("Numeric characters?");
};

var passwordSpecial = function () {
  passwordObj.special = window.confirm("Special characters?");
};


//initializing function
function writePassword() {
  //to reset password string after a succesful generation.
  password = "";
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};


//randomizers
var lowercaseRandomizer = function () {
  if(passwordObj.lowercase) {
    password += characterObj.lowercase.charAt(Math.floor(Math.random() * characterObj.lowercase.length));
  }
  else {
  deciderFunctionArray[decider()]();
  }
};

var uppercaseRandomizer = function () {
  if(passwordObj.uppercase) {
    password += characterObj.uppercase.charAt(Math.floor(Math.random() * characterObj.uppercase.length));
  }
  else {
    deciderFunctionArray[decider()]();
  }
}

var numericRandomizer = function () {
  if(passwordObj.numeric) {
    password += characterObj.numeric.charAt(Math.floor(Math.random() * characterObj.numeric.length));
  }
  else {
    deciderFunctionArray[decider()]();
  }
}

var specialRandomizer = function () {
  if(passwordObj.special) {
    password += characterObj.special.charAt(Math.floor(Math.random() * characterObj.special.length));
  }
  else {
    deciderFunctionArray[decider()]();
  }
};


//randomizer array
var deciderFunctionArray = [
  lowercaseRandomizer,
  uppercaseRandomizer,
  numericRandomizer,
  specialRandomizer
];


//loop
var generatePassword = function() {
  passwordPrompts();
  for(i = 0; i < passwordObj.length; i++) {
    debugger;
    deciderFunctionArray[decider()]();
    console.log(password);
  };
};


//event listener
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);