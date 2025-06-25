var content = document.querySelector(".content");
var input = document.querySelector(".content input");
var removeAllBtn = document.querySelector(".remove-btn");

var tags = ["helo"];

// Render tags
function render() {
  content.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `
         <li>
          ${tag}
          <i class="bx bx-x closeIcon" onCLick = "removeTag(${i})"></i>
        </li>
    `;
  }
  content.appendChild(input);
  input.focus();
}

render();

// Add tags
document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    tags.push(input.value.trim());
    input.value = "";
    render();
  }
});

// Remove tag
function removeTag(index) {
  tags.splice(index, 1);
  render();
}

// Remove all tags
removeAllBtn.addEventListener("click", function () {
  tags = [];
  render();
});
