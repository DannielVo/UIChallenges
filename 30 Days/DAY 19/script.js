var color = document.querySelector("#color");
var eraser = document.querySelector("#eraser");
var decrease = document.querySelector("#decrease");
var increase = document.querySelector("#increase");
var sizeEl = document.querySelector("#size");
var save = document.querySelector("#save");
var clear = document.querySelector("#clear");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// Init
var position1 = {
  x: 0,
  y: 0,
};

var position2 = {
  x: 0,
  y: 0,
};

var isDrawing = false;
var colorPaint = "#000000";
var size = 10;
sizeEl.innerText = size;

document.addEventListener("mousedown", function (e) {
  position1 = {
    x: e.offsetX,
    y: e.offsetY,
  };

  isDrawing = true;
});

document.addEventListener("mousemove", function (e) {
  if (isDrawing) {
    position2 = {
      x: e.offsetX,
      y: e.offsetY,
    };

    // Fill net ve
    ctx.beginPath();
    ctx.arc(position1.x, position1.y, size, 0, 2 * Math.PI);
    ctx.fillStyle = colorPaint;
    ctx.fill();

    // Ve outline
    ctx.beginPath();
    ctx.moveTo(position1.x, position1.y);
    ctx.lineTo(position2.x, position2.y);
    ctx.strokeStyle = colorPaint;
    ctx.lineWidth = size * 2;
    ctx.stroke();

    position1.x = position2.x;
    position1.y = position2.y;
  }
});

document.addEventListener("mouseup", function () {
  isDrawing = false;
});

// Color
color.addEventListener("change", function (e) {
  colorPaint = e.target.value;
});

// Eraser
eraser.addEventListener("click", function () {
  colorPaint = "#ffffff";
});

// Size
decrease.addEventListener("click", function () {
  if (size > 5) {
    size -= 5;
  } else {
    size = 5;
  }

  sizeEl.innerHTML = size;
});

increase.addEventListener("click", function () {
  if (size < 30) {
    size += 5;
  } else {
    size = 30;
  }

  sizeEl.innerHTML = size;
});

// Clear
clear.addEventListener("click", function () {
  var canvasStats = canvas.getClientRects()[0];
  ctx.clearRect(0, 0, canvasStats.width, canvasStats.height);
});

// Save
save.addEventListener("click", function () {
  var output = canvas.toDataURL("image/png");
  save.setAttribute("href", output);
});
