const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value;
    if (taskText === "") {
        alert("Please enter a task.");
        return;     
    }
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";   
    deleteBtn.addEventListener("click", function() {
        taskList.remove();
    });
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = "";
});