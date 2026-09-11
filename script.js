let tasks = [];

function addTask(){

    let task = document.getElementById("task").value;

    if(task==""){
        alert("Empty");
        return;
    }

    tasks.push(task);

    document.getElementById("list").innerHTML +=
        "<li>"+task+"</li>";

    console.log("Tasks:",tasks);

}
