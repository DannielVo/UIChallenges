var range = document.querySelector(".range");
var process = document.querySelector(".process");
var value = document.querySelector(".process span");

function updateProcess(percent) {
  process.style.width = `${percent}%`;
  value.innerHTML = `${percent}%`;
}

range.addEventListener("mousemove", function (e) {
  var processWidth = e.pageX - this.offsetLeft;
  console.log(e.pageX);
  console.log(this.offsetLeft);
  console.log(processWidth);
  var percent = (processWidth / this.offsetWidth) * 100;
  percent = Math.round(percent);
  updateProcess(percent);
});

updateProcess(30);

// pageX: vị trí X của con trỏ chuột tính từ mép trái của trang.
// this.offsetLeft: khoảng cách từ mép trái của trang đến phần tử .range.
// processWidth: tính khoảng cách từ mép trái của .range đến vị trí chuột — tức là khoảng cách chuột di chuyển trên thanh.
// percent: chuyển khoảng cách đó thành phần trăm so với chiều rộng toàn bộ thanh.
