var wrapper = document.querySelector(".wrapper");
var isMouseDown = false;
var startX, scrollLeft;

// mousedown
wrapper.addEventListener("mousedown", function (e) {
  isMouseDown = true;
  startX = e.pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
});

// mouseleave
wrapper.addEventListener("mouseleave", function () {
  isMouseDown = false;
});

// mouseup
wrapper.addEventListener("mouseup", function () {
  isMouseDown = false;
});

// mousemove
wrapper.addEventListener("mousemove", function (e) {
  if (!isMouseDown) {
    return;
  }

  let x = e.pageX - wrapper.offsetLeft;
  let distance = (x - startX) * 3;
  wrapper.scrollLeft = scrollLeft - distance;
});
