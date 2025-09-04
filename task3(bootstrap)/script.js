// Show/Hide Password
var showPass = document.getElementById("showPass");
var password = document.getElementById("password");

showPass.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

// Form Validation
var form = document.getElementById("loginForm");
var username = document.getElementById("username");
var userError = document.getElementById("userError");
var passError = document.getElementById("passError");

form.onsubmit = function (event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  var userVal = username.value.trim();
  var passVal = password.value;

  userError.innerText = "";
  passError.innerText = "";

  var valid = true;

  // Username validation
  if (userVal.length < 3) {
    userError.innerText = " Username must be at least 3 characters.";
    valid = false;
  } else if (userVal.indexOf(" ") !== -1) {
    userError.innerText = " Username must not contain spaces.";
    valid = false;
  } else if (userVal.charAt(0) !== userVal.charAt(0).toUpperCase()) {
    userError.innerText = " First letter must be uppercase.";
    valid = false;
  }

  // Password validation
  if (passVal.length < 6) {
    passError.innerText = " Password must be at least 6 characters.";
    valid = false;
  } else if (passVal.indexOf("!") === -1) {
    passError.innerText = " Password must contain '!'.";
    valid = false;
  }

  if (valid) {
    alert(" Login Successful!");
  }
};
