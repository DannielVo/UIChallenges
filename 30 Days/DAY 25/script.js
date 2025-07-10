var video = document.querySelector("video");
var play = document.querySelector(".play");
var timer = document.querySelector(".timer");
var progressFilled = document.querySelector(".progress-filled");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var volume = document.querySelector(".volume");
var volumeIcon = document.querySelector(".volume i");
var volumeInput = document.querySelector(".volume input");
var volumeCached = 0;

function toggleVideo() {
  if (video.paused) {
    video.play();
    play.innerHTML = `<i class="bx bx-pause"></i>`;
  } else {
    video.pause();
    play.innerHTML = ` <i class="bxr bx-play"></i>`;
  }
}

function updateTimer() {
  timer.innerHTML =
    timeToMMSS(video.currentTime) + "/" + timeToMMSS(video.duration);

  let percentProgress = Math.floor((video.currentTime / video.duration) * 100);
  progressFilled.style.width = `${percentProgress}%`;
}

function timeToMMSS(sec) {
  let minute = Math.floor(sec / 60);
  let second = Math.floor(sec % 60);

  return `${minute}:${second}`;
}

function skip(skipTime) {
  video.currentTime += skipTime;
}

function updateVolume() {
  if (video.volume == 0) {
    volumeIcon.classList.remove("bx-volume-full");
    volumeIcon.classList.add("bx-volume-mute");
  } else {
    volumeIcon.classList.add("bx-volume-full");
    volumeIcon.classList.remove("bx-volume-mute");
  }
}

play.addEventListener("click", toggleVideo);
video.addEventListener("click", toggleVideo);
video.addEventListener("timeupdate", updateTimer);
prev.addEventListener("click", function () {
  skip(-5);
});
next.addEventListener("click", function () {
  skip(5);
});

volumeInput.addEventListener("change", function () {
  volumeCached = this.value;
  video.volume = this.value;
  updateVolume();
});

volumeIcon.addEventListener("click", function () {
  if (video.volume == 0) {
    video.volume = volumeCached;
    volumeInput.value = volumeCached;
  } else {
    video.volume = 0;
    volumeInput.value = 0;
  }

  updateVolume();
});
