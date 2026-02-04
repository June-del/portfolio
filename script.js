const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks from Local Storage on page load
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => createTaskElement(task.text, task.completed));

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  createTaskElement(taskText, false);
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
});

// Function to create task element
function createTaskElement(text, completed) {
  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = text;

  if (completed) taskSpan.classList.add("completed");

  // Toggle completed class and update Local Storage
  taskSpan.addEventListener("click", function () {
    taskSpan.classList.toggle("completed");

    // Update the tasks array
    tasks = tasks.map(task => 
      task.text === text ? { text: task.text, completed: taskSpan.classList.contains("completed") } : task
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(taskSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    li.remove();
    tasks = tasks.filter(task => task.text !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}