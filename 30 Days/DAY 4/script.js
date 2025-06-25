var images = document.querySelectorAll(".image img");
var gallery = document.querySelector(".gallery");
var gallerImg = document.querySelector(".gallery-inner img");
var closeIcon = document.querySelector(".close");
var prevIcon = document.querySelector(".prev");
var nextIcon = document.querySelector(".next");

var currentIndex = 0;

function showGalleyImg() {
  if (currentIndex == 0) {
    prevIcon.classList.add("hide");
  } else {
    prevIcon.classList.remove("hide");
  }

  if (currentIndex == images.length - 1) {
    nextIcon.classList.add("hide");
  } else {
    nextIcon.classList.remove("hide");
  }

  // Show img
  gallerImg.src = images[currentIndex].src;
  gallery.classList.add("show");
}

images.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    showGalleyImg();
  });
});

closeIcon.addEventListener("click", function () {
  gallery.classList.remove("show");
});

// Setup keyboard: Click "ESC" to exit
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});

// Icon prev
prevIcon.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showGalleyImg();
  }
});

// Icon next
nextIcon.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGalleyImg();
  }
});
