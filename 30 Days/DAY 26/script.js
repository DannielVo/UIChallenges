var input = document.querySelector(".form-input input");
var lowercase = document.querySelector(".lowercase");
var uppercase = document.querySelector(".uppercase");
var number = document.querySelector(".number");
var symbol = document.querySelector(".symbol");
var characters = document.querySelector(".characters");

function updateIcon(group) {
  let icon = group.querySelector("i");

  if (group.classList.contains("valid")) {
    icon.className = "bxr bx-check";
  } else {
    icon.className = "bx bx-x";
  }
}

input.addEventListener("input", function () {
  let val = this.value;

  // Lowercase
  if (/[a-z]/.test(val)) {
    lowercase.classList.add("valid");
  } else {
    lowercase.classList.remove("valid");
  }
  updateIcon(lowercase);

  // Uppercase
  if (/[A-Z]/.test(val)) {
    uppercase.classList.add("valid");
  } else {
    uppercase.classList.remove("valid");
  }
  updateIcon(uppercase);

  // Number
  if (/[0-9]/.test(val)) {
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
  }
  updateIcon(number);

  // Symbol
  if (/[\W]/.test(val)) {
    symbol.classList.add("valid");
  } else {
    symbol.classList.remove("valid");
  }
  updateIcon(symbol);

  // At least 8 characters
  if (val.length >= 8) {
    characters.classList.add("valid");
  } else {
    characters.classList.remove("valid");
  }
  updateIcon(characters);
});
