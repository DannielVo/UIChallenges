var boxes = document.querySelectorAll(".box");
var targetList = document.querySelectorAll(".target");

var currentTarget = null;

targetList.forEach((target) => {
  target.addEventListener("dragstart", function (e) {
    target.classList.add("dragging");
    currentTarget = this;
  });

  target.addEventListener("dragend", function (e) {
    target.classList.remove("dragging");
  });
});

boxes.forEach((box) => {
  box.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  box.addEventListener("drop", function (e) {
    if (!box.querySelector(".target")) {
      this.appendChild(currentTarget);
    }
  });
});
