var container = document.querySelector(".container");

for (let i = 0; i < 204; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.append(square);

  // Create color
  square.addEventListener("mouseenter", function (e) {
    let color = randomColor();
    let el = e.currentTarget;
    el.style.background = color;
    el.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;
  });

  // Reset color
  square.addEventListener("mouseleave", function (e) {
    let el = e.currentTarget;
    el.style.background = "#1d1d1d";
    el.style.boxShadow = "0 0 2px #000";
  });
}

function randomColor() {
  var charColor = "0123456789ABCDEF";
  var colorCode = "#";

  for (let i = 0; i < 6; i++) {
    colorCode += charColor[Math.floor(Math.random() * charColor.length)];
  }

  return colorCode;
}
