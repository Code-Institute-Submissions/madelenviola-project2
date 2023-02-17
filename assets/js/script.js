var todoList = [];
var that = this;
/**
 * Adds a new TODO to the list.*/
// function newElement() {
//     var li = document.createElement('li');
//     var taskValue = document.getElementById('addtaskField').value;
//     var task = document.createTextNode(taskValue);
//     li.appendChild(task);
//     if (taskValue === '') {
//         alert('Write a task for your to-do list');
//     } else {
//         document.getElementById("todoList").appendChild(li);
//     }
//     document.getElementById("addtaskField").value = "";

//     li.appendChild(addTrashCan());
//     var checkBox = document.createElement("input");
//     checkBox.setAttribute("type", "checkbox");
//     checkBox.onclick = toggleTaskCompleted;
//     li.appendChild(checkBox);

// }

function addTrashCan() {
    var trashCan = document.createElement("span");
    trashCan.className = ("fa-solid fa-trash");
    trashCan.onclick = deleteTask;
    return trashCan;
}

function toggleTaskCompleted(event) {
    const element = event.target;
    const taskValue = element.parentElement.innerText;
    var i = todoList.findIndex(o => o.task === taskValue);
    todoList[i].completed = true;
    that.updateLocalStorage();
    element.parentElement.className = ("strike-through");
}
/**
 * Deletes the task from UI and updates localstorage.
 * @param element The element corresponding to task to be deleted.
 */
function deleteTask(event) {
    const element = event.target;
    const taskValue = element.parentElement.innerText;
    var i = todoList.findIndex(o => o.task === taskValue);
    delete todoList[i];
    that.updateLocalStorage();
    element.parentElement.remove();
}

function updateLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(todoList));
}

function addTask() {
    const taskValue = document.getElementById('addtaskField').value;
    if (!taskValue) {
        alert('Write a task for your to-do list');
        return;
    }

    renderTask(taskValue);
    saveTask(taskValue);
}

function saveTask(taskValue) {
    todoList.push({
        task: taskValue,
        completed: false
    })
    updateLocalStorage();
}

function loadTasks() {
    const tasks = localStorage.getItem("todos");
    if (tasks) {
        todoList = JSON.parse(tasks);
    }

    todoList.forEach((task) => renderTask(task.task));
}

function renderTask(taskValue, completed = false) {
    var li = document.createElement('li');
    var task = document.createTextNode(taskValue);
    li.appendChild(task);
    if (completed) {
        li.setAttribute("class", "strike-through");
    }

    document.getElementById("todoList").appendChild(li);
    document.getElementById("addtaskField").value = "";

    li.appendChild(addTrashCan());
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.onclick = toggleTaskCompleted;
    li.appendChild(checkBox);
}

document.addEventListener("DOMContentLoaded", loadTasks);