var imgList = document.querySelectorAll(".box img");
var mirror = document.querySelector("#mirror");

mirror.classList.add("hide");

imgList.forEach(function (img) {
  img.addEventListener("mousemove", function (e) {
    mirror.classList.remove("hide");

    // Tính phần trăm vị trí chuột trong ảnh
    let mousePercentByWidth = (e.offsetX / this.offsetWidth) * 100;
    let mousePercentByHeight = (e.offsetY / this.offsetHeight) * 100;
    mirror.style.top = `${e.clientY}px`;
    mirror.style.left = `${e.clientX}px`;

    mirror.style.backgroundSize = `1000px 1000px`;
    mirror.style.backgroundPosition = `${mousePercentByWidth}% ${mousePercentByHeight}%`;

    let imgSource = e.target.getAttribute("src");
    mirror.style.backgroundImage = `url(${imgSource})`;
  });

  img.addEventListener("mouseleave", function () {
    mirror.classList.add("hide");
  });
});
