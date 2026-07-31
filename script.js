let tasks = [];

function addTask(){

    let task = document.getElementById("task").value;

    if(task==""){
        alert("Empty");
        return;
    }

    tasks.push(task);

    var li = document.createElement("li");
    li.textContent = task;
    document.getElementById("list").appendChild(li);

    console.log("Tasks:",tasks);

}
