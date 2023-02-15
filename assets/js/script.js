function newElement() {
    var li = document.createElement('li');
    var taskValue = document.getElementById('addtaskField').value;
    var task = document.createTextNode(taskValue);
    li.appendChild(task);
    if (taskValue === '') {
        alert('Write a task for your to-do list');
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("addtaskField").value = "";

    li.appendChild(addTrashCan());
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    li.appendChild(checkBox);

}

function addTrashCan() {
    var trashCan = document.createElement("span");
    trashCan.className = ("fa-solid fa-trash");
    trashCan.onclick = function () {
        this.parentElement.remove();
    };
    return trashCan;
}

