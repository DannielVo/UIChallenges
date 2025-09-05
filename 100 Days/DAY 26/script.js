const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".button");

let active = 0;

function activeCard() {
  const currentCard = cards[active];
  currentCard.classList.remove("active");
  currentCard.classList.add("inactive");

  active++;

  if (active >= 3) {
    active = 0;
  }

  const nextCard = cards[active];
  nextCard.classList.remove("inactive");
  nextCard.classList.add("active");
}

buttons.forEach((btn) => {
  btn.addEventListener("click", activeCard);
});
