var eKey = document.querySelector(".card.key p:last-child");
var eLocation = document.querySelector(".card.location p:last-child");
var eWhich = document.querySelector(".card.which p:last-child");
var eCode = document.querySelector(".card.code p:last-child");
var eKey = document.querySelector(".card.key p:last-child");
var alert = document.querySelector(".alert");
var box = document.querySelector(".box");
var result = document.querySelector(".result");
var closeIcon = document.querySelector(".closeIcon");

document.addEventListener("keydown", (e) => {
  eKey.innerText = e.key;
  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
  result.innerHTML = e.code;

  alert.classList.add("hidden");
  box.classList.remove("hidden");
});

closeIcon.addEventListener("click", function () {
  alert.classList.remove("hidden");
  box.classList.add("hidden");
});
