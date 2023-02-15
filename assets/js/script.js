function newElement() {
    let li = document.createElement('li');
    let taskValue = document.getElementById('addtaskField').value;
    let task = document.createTextNode(taskValue);
    li.appendChild(task);
    if (taskValue === '') {
        alert('Write a task for your to-do list')
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("addtaskField").value = "";
    const trashCan = document.createElement("span");
    trashCan.className = ("fa-solid fa-trash");
    trashCan.onclick = function(){
    this.parentElement.remove();
    }
    li.appendChild(trashCan);
    
}
