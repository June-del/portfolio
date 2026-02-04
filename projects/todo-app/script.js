addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  // Create a span for the task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Toggle completed class on click
  taskSpan.addEventListener("click", function () {
    taskSpan.classList.toggle("completed");
  });

  li.appendChild(taskSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});