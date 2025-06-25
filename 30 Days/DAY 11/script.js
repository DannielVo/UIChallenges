var btnSuccess = document.querySelector(".btn-container .success");
var btnWarning = document.querySelector(".btn-container .warning");
var btnError = document.querySelector(".btn-container .error");

btnSuccess.addEventListener("click", function () {
  createToast("success");
});

btnWarning.addEventListener("click", function () {
  createToast("warning");
});

btnError.addEventListener("click", function () {
  createToast("error");
});

function createToast(status) {
  let templateInner = `
        <i class="bxr bx-check-circle"></i>
        <span class="message">This is a success message</span>
  `;

  switch (status) {
    case "success":
      templateInner = `
        <i class="bxr bx-check-circle"></i>
        <span class="message">This is a success message</span>
      `;
      break;

    case "warning":
      templateInner = `
         <i class="bxr bx-alert-triangle"></i>
        <span class="message">This is a warning message</span>
      `;
      break;

    case "error":
      templateInner = `
         <i class="bxr bx-x-circle"></i>
        <span class="message">This is a error message</span>
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
