function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const pendingList = document.getElementById("pendingTasks");

    const li = document.createElement("li");

    const time = new Date().toLocaleString();

    li.innerHTML = `
        <strong>${taskText}</strong>
        <div class="task-time">Added: ${time}</div>
        <div class="actions">
            <button class="complete" onclick="completeTask(this)">Complete</button>
            <button onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    pendingList.appendChild(li);
    taskInput.value = "";
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    const completedList = document.getElementById("completedTasks");

    const completedTime = new Date().toLocaleString();
    taskItem.querySelector(".task-time").innerText =
        "Completed: " + completedTime;

    button.remove(); // remove complete button
    completedList.appendChild(taskItem);
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector("strong");

    const newText = prompt("Edit task:", taskText.innerText);
    if (newText !== null && newText.trim() !== "") {
        taskText.innerText = newText;
    }
}
