document.getElementById("signupForm").addEventListener("submit", function (event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  let isValid = true;

  // Get input values
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');
  let birthdate = document.getElementById("birthdate").value;

  // Clear old errors
  document.getElementById("firstNameError").innerHTML = "";
  document.getElementById("lastNameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("confirmPasswordError").innerHTML = "";
  document.getElementById("genderError").innerHTML = "";
  document.getElementById("birthdateError").innerHTML = "";

  // Validate First Name
  if (firstName === "") {
    document.getElementById("firstNameError").innerHTML = "First name is required";
    isValid = false;
  } else if (firstName.length < 3) {
    document.getElementById("firstNameError").innerHTML = "First name must be at least 3 characters";
    isValid = false;
  } else if (firstName.includes(" ")) {
    document.getElementById("firstNameError").innerHTML = "First name cannot contain spaces";
    isValid = false;
  } else if (firstName[0] !== firstName[0].toUpperCase()) {
    document.getElementById("firstNameError").innerHTML = "First letter must be capital";
    isValid = false;
  }

  // Validate Last Name
  if (lastName === "") {
    document.getElementById("lastNameError").innerHTML = "Last name is required";
    isValid = false;
  } else if (lastName.length < 3) {
    document.getElementById("lastNameError").innerHTML = "Last name must be at least 3 characters";
    isValid = false;
  } else if (lastName.includes(" ")) {
    document.getElementById("lastNameError").innerHTML = "Last name cannot contain spaces";
    isValid = false;
  } else if (lastName[0] !== lastName[0].toUpperCase()) {
    document.getElementById("lastNameError").innerHTML = "First letter must be capital";
    isValid = false;
  }

  // Validate Email with regex pattern
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (email === "") {
    document.getElementById("emailError").innerHTML = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML = "Enter a valid email";
    isValid = false;
  }

  // Validate Phone (10-15 digits)
  let phonePattern = /^[0-9]{10,15}$/;
  if (phone === "") {
    document.getElementById("phoneError").innerHTML = "Phone number is required";
    isValid = false;
  } else if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").innerHTML = "Phone must be 10-15 digits";
    isValid = false;
  }

  // Validate Password
  if (password.length < 6 || !password.includes("!")) {
    document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters and include !";
    isValid = false;
  }

  // Validate Confirm Password
  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").innerHTML = "Confirm password is required";
    isValid = false;
  } else if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
    isValid = false;
  }

  // Validate Gender
  if (!gender) {
    document.getElementById("genderError").innerHTML = "You must select a gender";
    isValid = false;
  }

  // Validate Birthdate
  if (birthdate === "") {
    document.getElementById("birthdateError").innerHTML = "Birthdate is required";
    isValid = false;
  }

  // If all fields are valid
  if (isValid) {
    alert("Form submitted successfully!");
  }
});
