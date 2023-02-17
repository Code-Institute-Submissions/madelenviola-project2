let todoList = [];

/**
 * Adds the trashcan to the li
 */
function addTrashCan() {
    let trashCan = document.createElement("span");
    trashCan.className = ("fa-solid fa-trash");
    trashCan.onclick = deleteTask;
    return trashCan;
}
/**
 * Toggles the task completion value in todoList and updates UI.
 */
function toggleTaskCompleted(event) {
    const element = event.target;
    const taskValue = element.parentElement.innerText;

    let i = todoList.findIndex(o => o.task === taskValue);
    const completed = !todoList[i].completed;
    todoList[i].completed = completed;

    if (completed) {
        element.parentElement.classList.add("strike-through");
    } else {
        element.parentElement.classList.remove("strike-through");
    }   

    updateLocalStorage();
}

/**
 * Deletes the task from UI and updates localstorage.
 * @param element The element corresponding to task to be deleted.
 */
function deleteTask(event) {
    const element = event.target;
    const taskValue = element.parentElement.innerText;
    let i = todoList.findIndex(o => o.task === taskValue);
    todoList.splice(i, 1);
    updateLocalStorage();
    element.parentElement.remove();
}

function updateLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(todoList));
}

/**
 * Adds the taskValue from UI 
 */
function addTask() {
    const taskValue = document.getElementById('addtaskField').value;
    if (!taskValue) {
        alert('Write a task for your to-do list');
        return;
    }

    renderTask(taskValue);
    saveTask(taskValue);
}
// * Saves the task from UI and updates localstorage.
//  * @param taskValue The taskValue corresponding to the task being saved.
//  */
function saveTask(taskValue) {
    todoList.push({
        task: taskValue,
        completed: false
    });
    updateLocalStorage();
}
/**
 * Loads the tasks from localstorage into toDoList.
 */
function loadTasks() {
    const tasks = localStorage.getItem("todos");
    if (tasks) {
        todoList = JSON.parse(tasks);
    }

    todoList.forEach((task) => renderTask(task.task, task.completed));
}
/**
 * Renders the tasks from todoList into UI.
 */
function renderTask(taskValue, completed = false) {
    let li = document.createElement('li');
    let task = document.createTextNode(taskValue);
    li.appendChild(task);
    
    document.getElementById("todoList").appendChild(li);
    document.getElementById("addtaskField").value = "";
    
    li.appendChild(addTrashCan());
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.onclick = toggleTaskCompleted;
    li.appendChild(checkBox);

    if (completed) {
        li.setAttribute("class", "strike-through");
        checkBox.checked = true;
    }
}

document.addEventListener("DOMContentLoaded", loadTasks);