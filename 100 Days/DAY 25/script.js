const frame = document.querySelector(".frame");
const card = document.querySelector(".card");
const mark = document.querySelector(".mark-map");

card.addEventListener("click", () => {
  frame.classList.toggle("active");
  frame.classList.toggle("inactive");
});

mark.addEventListener("click", () => {
  frame.classList.toggle("active");
  frame.classList.toggle("inactive");
});
