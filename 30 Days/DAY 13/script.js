var upload = document.querySelector("#mypicture");
var preview = document.querySelector(".preview");

upload.addEventListener("change", function (e) {
  var file = upload.files[0];

  // Check file
  if (!file) {
    return;
  }

  // Kiểm tra định dạng file: jpg hoặc png
  var fileName = file.name.toLowerCase();
  if (fileName.endsWith(".jpg") || fileName.endsWith(".png")) {
    createToast("success");

    var img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
  } else {
    createToast("error");
    return;
  }

  var img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  preview.appendChild(img);
});

// Create Notification
function createToast(status) {
  let templateInner = `
        <i class="bxr bx-check-circle"></i>
        <span class="message">This is a success message</span>
  `;

  switch (status) {
    case "success":
      templateInner = `
        <i class="bxr bx-check-circle"></i>
        <span class="message">Upload successfully</span>
      `;
      break;

    case "error":
      templateInner = `
         <i class="bxr bx-x-circle"></i>
        <span class="message">You can only upload .jpg or .png file</span>
      `;
      break;
  }

  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = `${templateInner}
    <span class="countdown"></span>
  `;

  var toastList = document.getElementById("toasts");
  toastList.appendChild(toast);

  setTimeout(function () {
    toast.style.animation = "slide_hide 2s ease forwards";
  }, 1500);

  setTimeout(function () {
    toast.remove();
  }, 6000);
}
