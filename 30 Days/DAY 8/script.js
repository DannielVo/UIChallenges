var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var form = document.querySelector("form");

// Show error
function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
}

// Show success
function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = "";
}

// Check empty
function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "This field cannot be empty");
    } else {
      showSuccess(input);
    }
  });

  return isEmptyError;
}

// Check length input
function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Must be at least ${min} characters`);
    return true;
  }

  if (input.value.length > max) {
    showError(input, `Must not exceed ${max} characters`);
    return true;
  }

  showSuccess(input);
  return false;
}

// Check email is valid
function checkEmailError(input) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  input.value = input.value.trim();
  let isEmailValid = regexEmail.test(input.value);

  if (isEmailValid) {
    showSuccess(input);
    return false;
  } else {
    showError(input, "Email is invalid");
    return true;
  }
}

// Check match password
function checkPasswordError(paswordInput, cfPasswordInput) {
  if (paswordInput.value === cfPasswordInput.value) {
    showSuccess(input);
    return false;
  } else {
    showError(cfPasswordInput, "Password do not match");
    return true;
  }
}

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmptyError = checkEmptyError([
    username,
    email,
    password,
    confirmPassword,
  ]);
  let isEmailError = checkEmailError(email);
  let isUsernameLengthError = checkLengthError(username, 2, 10);
  let isPasswordLengthError = checkLengthError(password, 6, 15);
  let isPasswordValid = checkPasswordError(password, confirmPassword);

  // CÁC BƯỚC TIẾP THEO:
  if (
    isEmptyError ||
    isEmailError ||
    isUsernameLengthError ||
    isPasswordLengthError ||
    isPasswordValid
  ) {
    // do nothing
  } else {
    // call API. logic..
  }
});
