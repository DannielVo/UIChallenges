// Cach 2: Dung js
var p = document.querySelector(".typing-wrapper p");
var origiContent = p.innerHTML;
var index = 0;
var isForward = true;

setInterval(function () {
  if (isForward) {
    index++;
    if (index >= origiContent.length) {
      isForward = false;
    }
  } else {
    index--;
    if (index <= 0) {
      isForward = true;
    }
  }

  p.innerHTML = origiContent.substring(0, index);
}, 300);
