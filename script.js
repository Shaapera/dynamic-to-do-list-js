document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    function addTask() {
        const taskText = taskInput.value.trim();
    
        if (taskText != "") {
            const taskListItem = document.createElement('li');
            taskListItem.textContent = taskText;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            removeButton.onclick = function () {
                taskList.removeChild(taskListItem);
                const taskIndex = task.indexOf(taskText);
                if (taskIndex !== -1) {
                    task.splice(taskIndex, 1);
                }
                saveTasksToLocalStorage(tasks);

            };
        } else {
            alert('enter a task');
            return;
        };
        taskListItem.appendChild(removeButton);
        taskList.appendChild(taskListItem);
        tasks.push(taskText);
        saveTasksToLocalStorage(tasks);
        taskInput.value = '';



    }
})