var boxUpload = document.querySelector(".upload-field");
var input = document.querySelector(".drop");
var button = document.querySelector(".upload-btn");
var fileTxt = document.querySelector(".file");
var upload = document.querySelector(".upload");
var loading = document.querySelector(".loading");
var done = document.querySelector(".done");
var greenBar = document.querySelector(".green-bar");

input.addEventListener("change", (e) => {
  fileTxt.innerHTML = e.target.files[0].name;
  upload.style.opacity = "0";
});

button.addEventListener("click", () => {
  if (input.files.length >= 1 && button.innerHTML !== "Done") {
    boxUpload.style.visibility = "hidden";
    boxUpload.style.opacity = "0";
    greenBar.style.animation = "green 3.2s ease-out forwards";
    loading.style.animation = "load 3.25s ease-out forwards";
    done.style.animation = "exit 0.7s linear 3.2s forwards";
    button.innerHTML = "Uploading...";

    const test = setTimeout(() => {
      button.innerHTML = "Done";
    }, 3177);
    test;
    // button.setAttribute("disabled", "true");
  } else if (button.innerHTML === "Done") {
    boxUpload.style.visibility = "visible";
    boxUpload.style.opacity = "1";
    greenBar.style.animation = "none";
    loading.style.animation = "none";
    done.style.animation = "none";
    button.innerHTML = "Upload file";
    fileTxt.innerHTML = "";
    upload.style.opacity = "1";
    input.value = "";
  }
});

// input.addEventListener("dragenter", () => {
//   boxUpload.classList.add("over");
// });

// input.addEventListener("dragleave", () => {
//   boxUpload.classList.remove("over");
// });
