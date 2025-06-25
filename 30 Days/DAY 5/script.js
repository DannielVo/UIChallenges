var searchBoxBtn = document.querySelector(".search-box-btn");

// Cách 1
// var searchBox = document.querySelector(".search-box");

// function toggleSearchBox() {
//   searchBox.classList.toggle("show");
// }

// searchBoxBtn.addEventListener("click", toggleSearchBox);

// Cách 2
searchBoxBtn.addEventListener("click", function () {
  this.parentElement.classList.toggle("show"); // returns the parent element => search-box
  this.previousElementSibling.focus(); // returns the previous element => search-box-input
});
