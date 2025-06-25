var btnOpen = document.querySelector(".open-modal-btn");
var modal = document.querySelector(".modal");
var iconClose = document.querySelector(".modal-header i");
var btnClose = document.querySelector(".modal-footer button");

function toggleModal(e) {
  modal.classList.toggle("hidden");
}

btnOpen.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
    // e.target là phần tử thực tế được click.
    // e.currentTarget là phần tử gán sự kiện (ở đây là .modal).
  }
});
