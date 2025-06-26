var animationElements = document.querySelectorAll(".show-on-scroll");

function toggleAnimationElementInWindow(element) {
  var rect = element.getClientRects()[0];
  var heightScreen = window.innerHeight;

  // Check xem element co nam ben trong man hinh hay ko
  if (!(rect.bottom < 0 || rect.top > heightScreen)) {
    // Element nam trong man hinh
    element.classList.add("start");
  } else {
    // Element nam ngoai man hinh
    element.classList.remove("start");
  }
}

function checkAnimation() {
  animationElements.forEach((el) => {
    toggleAnimationElementInWindow(el);
  });
}

window.onscroll = checkAnimation;
