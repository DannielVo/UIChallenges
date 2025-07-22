var cardImage = document.querySelector(".card-img");
var cardTitle = document.querySelector(".card-info h2");
var cardContent = document.querySelector(".card-info p");
var cardButton = document.querySelector(".card-info button");

setTimeout(() => {
  cardImage.innerHTML = `<img src="img1.jpeg">`;
  cardTitle.innerHTML = "Black Sun";
  cardContent.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia sit, earum, commodi laudantium odio eius corporis vel animi eum nihil non mollitia.";
  cardButton.innerHTML = "Read More";

  document.querySelectorAll(".loading").forEach((item) => {
    item.classList.remove("loading");
  });
}, 4000);
