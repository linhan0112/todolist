const user_input = document.querySelector(".user_input");
const list = document.querySelector(".list");
const button = document.querySelector(".button");

function new_task() {
  if (user_input.value === "") {
    return;
  }

  const task = document.createElement("li");
  task.innerHTML = `
    <input type="checkbox" class="checkbox">
    <label>${user_input.value}</label>
    <button class="trashcan">🗑️</button>
  `;

  const trashcan = task.querySelector(".trashcan");
  const checkbox = task.querySelector(".checkbox");

  trashcan.addEventListener("click", function () {
    task.remove();
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      task.style.textDecoration = "line-through";
      task.style.color = "#999";
      list.append(task);
    } else {
      task.style.textDecoration = "none";
      task.style.color = "";
      list.prepend(task);
    }
  });

  list.append(task);
  user_input.value = "";
}

button.addEventListener("click", new_task);

user_input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    new_task();
  }
});
