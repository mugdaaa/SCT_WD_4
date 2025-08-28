function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskDateTime = document.getElementById("taskDateTime");
  let taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");

  let taskInfo = document.createElement("div");
  taskInfo.className = "task-info";
  taskInfo.innerHTML = `<span>${taskInput.value}</span>
                        <small>${taskDateTime.value ? "📅 " + taskDateTime.value : ""}</small>`;

  let taskButtons = document.createElement("div");
  taskButtons.className = "task-buttons";

  let completeBtn = document.createElement("button");
  completeBtn.innerText = "✔";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = function () {
    taskInfo.classList.toggle("completed");
  };

  let editBtn = document.createElement("button");
  editBtn.innerText = "✎";
  editBtn.className = "edit-btn";
  editBtn.onclick = function () {
    let newTask = prompt("Edit task:", taskInfo.children[0].innerText);
    if (newTask) taskInfo.children[0].innerText = newTask;
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "✖";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  taskButtons.appendChild(completeBtn);
  taskButtons.appendChild(editBtn);
  taskButtons.appendChild(deleteBtn);

  li.appendChild(taskInfo);
  li.appendChild(taskButtons);

  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
}
