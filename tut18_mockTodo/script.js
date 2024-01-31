const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// localStorage.removeItem("tasks");

// Load tasks from local storage and add them to the list
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach((task) => addTask(task.text, task.completed));

// Event listener for adding a new task
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText, false);
    taskInput.value = "";
  }
});

function addTask(text, completed) {
  // Create task item and set text
  const taskItem = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = text;
  taskItem.appendChild(taskText);

  // Mark as completed if applicable
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  if (completed) {
    taskItem.classList.add("completed");
  }

  // Create and add "Complete" button
  completeButton.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
    saveTasks();
  });
  taskItem.appendChild(completeButton);
  // Create and add "Edit" button

  // Add logic for editing a task

  // Create and add "Delete" but

  // Append buttons to task item and task item to list

  taskList.appendChild(taskItem);

  // Save updated tasks to local storage
  saveTasks();
}

function saveTasks() {
  const tasks = Array.from(taskList.children).map((task) => ({
    text: task.querySelector("span").textContent, // Extract task text
    completed: task.classList.contains("completed"), // Check if task is completed
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to local storage
}
