function newElement(){
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

        for (i = 0; i > close.length; i++) {
            close[i].onclick= function(){
                let div = this.parentElement;
                div.style.display = 'none';
        }
    }
}