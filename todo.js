function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value;
    const dateInput = document.getElementById("dateInput");
    const date = dateInput.value;

    if (task !== "") {
        const taskList = document.getElementById("taskList");

        let listItem = document.createElement("li");
        listItem.textContent = task;
        listItem.dataset.date = date;
        if (date) {
            listItem.textContent += " (Due: " + date + ")";
        }

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "-";
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        let completeBox = document.createElement("input");
        completeBox.type = "checkbox";
        completeBox.onchange = function() {
            if (completeBox.checked) {
                listItem.style.textDecoration = "line-through";
            } else {
                listItem.style.textDecoration = "none";
            }
        };

        const tasks = taskList.getElementsByTagName("li");
        let inserted = false;
        for (let i = 0; i < tasks.length; i++) {
            const existingDate = tasks[i].dataset.date;
            if (existingDate && date && existingDate > date) {
                taskList.insertBefore(listItem, tasks[i]);
                inserted = true;
                break;
            } else {
                taskList.appendChild(listItem);
            }
        }

        listItem.append(deleteButton);
        listItem.prepend(completeBox);

        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}