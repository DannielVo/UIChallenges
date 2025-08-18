var infos = document.querySelector(".info").childNodes[1];
var images = document.querySelector(".image").childNodes[1];
var listProfile = document.querySelectorAll(".profile");
var closeBtn = document.querySelector(".close");

function toggle() {
  document.querySelector(".detail").classList.toggle("active");
}

listProfile.forEach((e) => {
  e.addEventListener("click", (profile) => {
    toggle();
    images.src = profile.currentTarget.childNodes[1].src;
    infos.innerHTML = profile.currentTarget.childNodes[5].textContent;
  });
});

closeBtn.addEventListener("click", () => {
  toggle();
});
