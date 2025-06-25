var input = document.querySelector("input");
var addBtn = document.querySelector("button");
var form = document.querySelector("form");
var todo = document.querySelector(".todo");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let val = input.value.trim();

  if (val) {
    addToDoElement({
      text: val,
    });
    saveTodoList();
  }

  input.value = "";
});

// Add Todo Element
function addToDoElement(todoItem) {
  var li = document.createElement("li");
  li.innerHTML = `
        <span>${todoItem.text}</span>
        <i class="bxr bx-trash"></i>
  `;

  if (todoItem.status === "completed") {
    li.setAttribute("class", "completed");
  }

  li.addEventListener("click", function () {
    this.classList.toggle("completed");
    saveTodoList();
  });

  li.querySelector("i").addEventListener("click", function () {
    this.parentElement.remove();
    saveTodoList();
  });

  todo.appendChild(li);
}

// Save todo list
function saveTodoList() {
  let todoList = document.querySelectorAll("li");
  let todoStorage = [];

  todoList.forEach(function (item) {
    let text = item.querySelector("span").innerText;
    let status = item.getAttribute("class");

    todoStorage.push({
      text,
      status,
    });
  });

  localStorage.setItem("todolist", JSON.stringify(todoStorage));
}

// Init
function init() {
  let data = JSON.parse(localStorage.getItem("todolist"));
  data.forEach(function (item) {
    addToDoElement(item);
  });
}

init();
