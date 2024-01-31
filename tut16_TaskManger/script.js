let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let updateTask = null;
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (updateTask == null) {
    addTask();
    updateTask = null;
  } else {
    updateTaskToChange(updateTask);
    btn.textContent = "Add Task";
    updateTask = null;
  }
});

function addTask() {
  let text = taskInput.value.trim();
  if (text) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
            <span class="item">${text}</span>
            <button class="btnEdit">Edit</button>
            <button class="btnDelete">Delete</button>`;
    taskList.appendChild(taskItem);
    taskInput.value = "";

    // Add event listener for the Edit button
    const editButton = taskItem.querySelector(".btnEdit");
    editButton.addEventListener("click", () => editTask(editButton));

    const btnDelete = taskItem.querySelector(".btnDelete");
    btnDelete.addEventListener("click", () => deleteTask(btnDelete));
  }
}

function editTask(editButton) {
  const parent = editButton.parentElement;
  updateTask = parent.querySelector(".item");
  taskInput.value = updateTask.innerHTML;
  btn.textContent = "Updated Task";
}

function updateTaskToChange() {
  let text = taskInput.value.trim();
  updateTask.innerHTML = text;
  taskInput.value = "";
}

function deleteTask(btnDelete) {
  const parent = btnDelete.parentElement;
  parent.remove();
}
