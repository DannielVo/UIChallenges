// ====== Cach 1 ======
// var btnList = document.querySelectorAll("button");
// var imgList = document.querySelectorAll("img");

// function activeBtn(btnActive) {
//   btnList.forEach((btn) => {
//     btn.classList.remove("active");
//   });

//   btnActive.classList.add("active");
// }

// btnList.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     activeBtn(e.currentTarget);

//     let type = e.currentTarget.getAttribute("type");

//     imgList.forEach((img) => {
//       let footType = img.getAttribute("type");

//       if (type == "all" || type == footType) {
//         img.classList.remove("hide");
//       } else {
//         img.classList.add("hide");
//       }
//     });
//   });
// });

// ====== Cach 2 ======
var btnList = document.querySelectorAll("button");
var imgList = document.querySelectorAll("img");
var container = document.querySelector(".container");

// Init data
var arr = [];
imgList.forEach((item) => {
  arr.push({
    src: item.src,
    type: item.getAttribute("type"),
  });
});

function activeBtn(btnActive) {
  btnList.forEach((btn) => {
    btn.classList.remove("active");
  });

  btnActive.classList.add("active");
}

// Catch event
btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Active button
    activeBtn(e.currentTarget);

    // Filter data
    let type = e.currentTarget.getAttribute("type");
    if (type == "all") {
      render(arr);
      return;
    }

    let filterData = arr.filter((food) => {
      return food.type == type;
    });
    render(filterData);
  });
});

// Render
function render(list) {
  container.innerHTML = "";
  list.forEach((item) => {
    let imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.getAttribute("type", item.type);
    container.append(imgElement);
  });
}
